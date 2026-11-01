import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { getSupabaseEnv, isSupabaseConfigured } from './env';

const PROTECTED_PREFIXES = ['/practice', '/problems', '/challenges', '/compiler'];

export function isProtectedPathname(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  if (!isSupabaseConfigured()) {
    return supabaseResponse;
  }

  const { url, key } = getSupabaseEnv();

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
        Object.entries(headers).forEach(([headerKey, headerVal]) => {
          supabaseResponse.headers.set(headerKey, headerVal);
        });
      },
    },
  });

  // IMPORTANT: Verify JWT signature via getClaims() — never trust getSession() on server.
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  const { pathname, search } = request.nextUrl;

  if (!claims && isProtectedPathname(pathname)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/';
    redirectUrl.search = '';
    redirectUrl.searchParams.set('login', 'required');
    redirectUrl.searchParams.set('next', `${pathname}${search}`);

    const redirectResponse = NextResponse.redirect(redirectUrl);
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie);
    });
    for (const header of ['cache-control', 'expires', 'pragma']) {
      const val = supabaseResponse.headers.get(header);
      if (val) {
        redirectResponse.headers.set(header, val);
      }
    }
    return redirectResponse;
  }

  return supabaseResponse;
}
