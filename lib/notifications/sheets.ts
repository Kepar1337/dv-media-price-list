import { google } from 'googleapis';
import type { LeadEntry } from './types';

export function isSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID &&
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
      process.env.GOOGLE_SHEETS_PRIVATE_KEY,
  );
}

function getClient() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, '\n');
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

export async function appendLeadToSheet(entry: LeadEntry): Promise<void> {
  if (!isSheetsConfigured()) return;

  const sheets = getClient();
  const range = `${process.env.GOOGLE_SHEETS_SHEET_NAME || 'Leads'}!A:F`;

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [entry.ts, entry.name, entry.contact, entry.channels, entry.format, entry.msg],
      ],
    },
  });
}
