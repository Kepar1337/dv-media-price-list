import type { LeadEntry } from './types';

const TELEGRAM_API = 'https://api.telegram.org';

export function isTelegramConfigured(): boolean {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
}

function escape(s: string): string {
  return s.replace(/[<>&]/g, (c) => {
    if (c === '<') return '&lt;';
    if (c === '>') return '&gt;';
    return '&amp;';
  });
}

function formatMessage(entry: LeadEntry): string {
  const lines = [
    '<b>📨 Новий бриф з сайту</b>',
    '',
    `<b>Ім'я:</b> ${escape(entry.name)}`,
    `<b>Контакт:</b> ${escape(entry.contact)}`,
  ];
  if (entry.channels) lines.push(`<b>Цікавить:</b> ${escape(entry.channels)}`);
  if (entry.format) lines.push(`<b>Формат:</b> ${escape(entry.format)}`);
  if (entry.msg) lines.push('', '<b>Бриф:</b>', escape(entry.msg));
  lines.push('', `<i>${entry.ts}</i>`);
  return lines.join('\n');
}

export async function sendTelegram(entry: LeadEntry): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatMessage(entry),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Telegram API ${res.status}: ${body.slice(0, 200)}`);
  }
}
