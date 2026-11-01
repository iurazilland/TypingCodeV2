import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { isSupabaseConfigured } from '@/lib/supabase/env';

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { ok: false, code: 'SUPABASE_NOT_CONFIGURED' },
      { status: 500 }
    );
  }

  let body: { identifier?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, code: 'BAD_REQUEST' }, { status: 400 });
  }

  const rawIdentifier = (body.identifier || '').trim();
  const password = body.password || '';

  if (!rawIdentifier || !password) {
    return NextResponse.json(
      { ok: false, code: 'MISSING_FIELDS' },
      { status: 400 }
    );
  }

  const supabase = createClient();
  let email = rawIdentifier;

  // If identifier does not contain '@', treat it as a Login ID (username)
  if (!rawIdentifier.includes('@')) {
    const cleanUsername = rawIdentifier.toLowerCase();
    if (!/^[a-z0-9_]{4,20}$/.test(cleanUsername)) {
      return NextResponse.json(
        { ok: false, code: 'INVALID_CREDENTIALS' },
        { status: 401 }
      );
    }

    const { data: resolvedEmail, error: rpcError } = await supabase.rpc(
      'resolve_email_by_username',
      { p_username: cleanUsername }
    );

    if (rpcError) {
      return NextResponse.json(
        { ok: false, code: 'USERNAME_LOGIN_UNAVAILABLE' },
        { status: 400 }
      );
    }

    if (!resolvedEmail || typeof resolvedEmail !== 'string') {
      return NextResponse.json(
        { ok: false, code: 'INVALID_CREDENTIALS' },
        { status: 401 }
      );
    }

    email = resolvedEmail;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    const lower = error.message.toLowerCase();
    if (lower.includes('email not confirmed')) {
      return NextResponse.json(
        { ok: false, code: 'EMAIL_NOT_CONFIRMED' },
        { status: 401 }
      );
    }
    if (lower.includes('rate limit') || lower.includes('too many')) {
      return NextResponse.json(
        { ok: false, code: 'RATE_LIMITED' },
        { status: 429 }
      );
    }
    return NextResponse.json(
      { ok: false, code: 'INVALID_CREDENTIALS' },
      { status: 401 }
    );
  }

  return NextResponse.json({ ok: true });
}
