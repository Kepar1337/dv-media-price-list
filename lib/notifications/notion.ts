import { Client } from '@notionhq/client';
import type { LeadEntry } from './types';

export function isNotionConfigured(): boolean {
  return Boolean(process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID);
}

let cached: Client | null = null;
function getClient(): Client {
  if (!cached) cached = new Client({ auth: process.env.NOTION_API_KEY! });
  return cached;
}

export async function appendLeadToNotion(entry: LeadEntry): Promise<void> {
  if (!isNotionConfigured()) return;

  const notion = getClient();
  const databaseId = process.env.NOTION_DATABASE_ID!;

  const title = `${entry.name} — ${entry.contact}`;

  await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      Name: {
        title: [{ type: 'text', text: { content: title.slice(0, 200) } }],
      },
      Contact: {
        rich_text: [{ type: 'text', text: { content: entry.contact } }],
      },
      Channels: {
        rich_text: [{ type: 'text', text: { content: entry.channels } }],
      },
      Format: {
        rich_text: [{ type: 'text', text: { content: entry.format } }],
      },
      Message: {
        rich_text: [{ type: 'text', text: { content: entry.msg.slice(0, 2000) } }],
      },
      Submitted: {
        date: { start: entry.ts },
      },
    },
  });
}
