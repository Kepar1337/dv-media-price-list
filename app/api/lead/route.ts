import { NextRequest, NextResponse } from 'next/server';

interface LeadPayload {
  name: string;
  contact: string;
  channels: string;
  format: string;
  msg: string;
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Невірний формат запиту' }, { status: 400 });
  }

  if (!body.name?.trim() || !body.contact?.trim()) {
    return NextResponse.json(
      { error: "Заповніть обов'язкові поля: Ім'я та Telegram / Email" },
      { status: 400 },
    );
  }

  const entry = {
    name: body.name.trim(),
    contact: body.contact.trim(),
    channels: body.channels?.trim() || '',
    format: body.format?.trim() || '',
    msg: body.msg?.trim() || '',
    ts: new Date().toISOString(),
  };

  console.log('[lead]', JSON.stringify(entry));

  /*
   * TODO: підключити до зовнішніх сервісів після деплою.
   *
   * Telegram bot:
   *   const text = `Новий бриф від ${entry.name}\nКонтакт: ${entry.contact}\nЦікавить: ${entry.channels}\nФормат: ${entry.format}\nБриф: ${entry.msg}`;
   *   await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json' },
   *     body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
   *   });
   *
   * Email via Resend / Nodemailer:
   *   await resend.emails.send({ from: '...', to: '...', subject: '...', text: JSON.stringify(entry) });
   *
   * Google Sheets via googleapis:
   *   await sheets.spreadsheets.values.append({ ... });
   *
   * Environment variables needed (add to Vercel dashboard + .env.local):
   *   TELEGRAM_BOT_TOKEN=
   *   TELEGRAM_CHAT_ID=
   *   RESEND_API_KEY= (if using email)
   */

  return NextResponse.json({ ok: true });
}
