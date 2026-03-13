import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json().catch(() => ({}));

  const ADMIN_USER = 'jesusfdezr';
  const ADMIN_PASS = 'V@llado21';

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 });
  }

  const session = await getAdminSession();
  session.isAdmin = true;
  await session.save();

  return NextResponse.json({ ok: true });
}

