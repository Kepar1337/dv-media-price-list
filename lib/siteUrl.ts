export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');
  const stable = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (stable) return `https://${stable}`;
  const ephemeral = process.env.VERCEL_URL;
  if (ephemeral) return `https://${ephemeral}`;
  return 'https://dv-media-price-list.vercel.app';
}
