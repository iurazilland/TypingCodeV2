import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { getSupabaseEnv, isSupabaseConfigured } from './env';

const PROTECTED_PREFIXES = [
  '/practice',
  '/problems',
  '/speed-coding',
  '/challenges',
  '/compiler',
  '/profile',
];

export function isProtectedPathname(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function copySupabaseCookies(from: NextResponse, to: NextResponse): NextResponse {
  from.cookies.getAll().forEach((cookie) => {
    to.cookies.set(cookie);
  });
  for (const header of ['cache-control', 'expires', 'pragma']) {
    const val = from.headers.get(header);
    if (val) {
      to.headers.set(header, val);
    }
  }
  return to;
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

  // Verify JWT signature via getClaims() — never trust getSession() on server.
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  const { pathname, search } = request.nextUrl;

  if (!claims && isProtectedPathname(pathname)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/login';
    redirectUrl.search = '';
    redirectUrl.searchParams.set('next', `${pathname}${search}`);

    return copySupabaseCookies(supabaseResponse, NextResponse.redirect(redirectUrl));
  }

  if (claims && pathname === '/login') {
    const rawNext = request.nextUrl.searchParams.get('next');
    const safeNext =
      rawNext && rawNext.startsWith('/') && !rawNext.startsWith('//')
        ? rawNext
        : '/languages';
    const targetUrl = new URL(safeNext, request.url);
    return copySupabaseCookies(supabaseResponse, NextResponse.redirect(targetUrl));
  }

  return supabaseResponse;
}
