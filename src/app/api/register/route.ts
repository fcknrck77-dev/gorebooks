import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import db from '@/lib/db';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/session';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña requeridos' }, { status: 400 });
    }

    // Check if user exists
    const existing = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;
    if (existing) {
      return NextResponse.json({ error: 'El email ya está registrado' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = crypto.randomUUID();

    db.prepare('INSERT INTO users (id, email, password) VALUES (?, ?, ?)').run(
      userId,
      email,
      hashedPassword
    );

    // Auto-login
    const cookieStore = await cookies();
    const session = await getIronSession<any>(cookieStore, sessionOptions);
    session.userId = userId;
    session.email = email;
    await session.save();

    return NextResponse.json({ success: true, userId });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Error en el servidor' }, { status: 500 });
  }
}
