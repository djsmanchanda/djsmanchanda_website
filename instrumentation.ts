// instrumentation.ts
export async function register() {
    const orig = global.fetch;
    global.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === "string" ? input : (input as any).url;
      const start = Date.now();
      try {
        const res = await orig(input as any, init);
        const dur = Date.now() - start;
        console.log(`[SSR fetch] ${url} -> ${res.status} in ${dur}ms`);
        return res;
      } catch (e: any) {
        const dur = Date.now() - start;
        console.log(`[SSR fetch] ${url} -> ERROR in ${dur}ms: ${e?.message}`);
        throw e;
      }
    };
  }
  