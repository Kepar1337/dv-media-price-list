import { NextRequest, NextResponse } from 'next/server';
import { sendTelegram, isTelegramConfigured } from '@/lib/notifications/telegram';
import { appendLeadToNotion, isNotionConfigured } from '@/lib/notifications/notion';
import { isRateLimited } from '@/lib/notifications/rateLimit';
import type { LeadEntry } from '@/lib/notifications/types';

interface LeadPayload {
  name: string;
  contact: string;
  channels: string;
  format: string;
  msg: string;
  // honeypot — must be empty
  website?: string;
}

const MAX_FIELD_LENGTH = 2000;

function clip(v: unknown): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, MAX_FIELD_LENGTH);
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Забагато запитів. Спробуйте за хвилину.' },
      { status: 429 },
    );
  }

  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Невірний формат запиту' }, { status: 400 });
  }

  // Honeypot — silently accept bots, do not notify managers.
  if (body.website && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = clip(body.name);
  const contact = clip(body.contact);

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Заповніть обов'язкові поля: Ім'я та Telegram / Email" },
      { status: 400 },
    );
  }

  const entry: LeadEntry = {
    name,
    contact,
    channels: clip(body.channels),
    format: clip(body.format),
    msg: clip(body.msg),
    ts: new Date().toISOString(),
  };

  if (!isTelegramConfigured() && !isNotionConfigured()) {
    console.log('[lead]', JSON.stringify(entry));
    return NextResponse.json({ ok: true });
  }

  const results = await Promise.allSettled([
    isTelegramConfigured() ? sendTelegram(entry) : Promise.resolve(),
    isNotionConfigured() ? appendLeadToNotion(entry) : Promise.resolve(),
  ]);

  const failures = results.filter((r) => r.status === 'rejected');
  if (failures.length === results.length) {
    for (const f of failures) {
      if (f.status === 'rejected') console.error('[lead] delivery failed:', f.reason);
    }
    return NextResponse.json(
      { error: 'Не вдалось надіслати заявку. Напишіть менеджеру напряму.' },
      { status: 502 },
    );
  }

  if (failures.length > 0) {
    for (const f of failures) {
      if (f.status === 'rejected') console.error('[lead] partial failure:', f.reason);
    }
  }

  return NextResponse.json({ ok: true });
}
