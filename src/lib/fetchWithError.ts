/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/fetchWithError.ts
export async function fetchWithError(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);

  if (!res.ok) {
    // try to parse json error body if available
    let body;
    try {
      body = await res.json();
    } catch {
      body = await res.text();
    }

    const err = new Error(
      body?.message ?? `Request failed with status ${res.status}`
    );
    // attach more info
    (err as any).status = res.status;
    (err as any).body = body;
    throw err;
  }

  return res;
}
