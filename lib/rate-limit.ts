/**
 * Minimal in-memory fixed-window rate limiter.
 *
 * Good enough to curb casual spam on a low-traffic contact form. Note: state
 * lives in the serverless instance's memory, so the limit is per-instance and
 * resets on cold start. For strict, distributed limiting use a shared store
 * (e.g. Vercel KV / Upstash Redis).
 */

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

export type RateLimitResult =
  { ok: true; remaining: number } | { ok: false; retryAfter: number };

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 10 * 60 * 1000,
): RateLimitResult {
  const now = Date.now();

  // Opportunistic cleanup to keep the map bounded.
  if (store.size > 5000) {
    for (const [k, v] of store) {
      if (now > v.resetAt) store.delete(k);
    }
  }

  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { ok: true, remaining: limit - entry.count };
}
