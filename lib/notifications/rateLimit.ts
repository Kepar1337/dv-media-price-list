const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 5000) {
    for (const [key, ts] of hits) {
      if (!ts.length || now - ts[ts.length - 1] > WINDOW_MS) hits.delete(key);
    }
  }
  return recent.length > MAX_REQUESTS;
}
