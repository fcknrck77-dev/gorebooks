import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';

// Endpoint unificado para la autenticación de Admin
// GET: Verificar si la sesión es válida
// POST: Iniciar sesión
// DELETE: Cerrar sesión

const ADMIN_USER = 'jesusfdezr';
const ADMIN_PASS = 'V@llado21';

export async function GET() {
  const session = await getAdminSession();
  return NextResponse.json({ isAdmin: !!session.isAdmin });
}

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      const session = await getAdminSession();
      session.isAdmin = true;
      await session.save();
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, error: 'Usuario o contraseña incorrectos' }, 
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Datos de inicio de sesión inválidos' }, 
      { status: 400 }
    );
  }
}

export async function DELETE() {
  const session = await getAdminSession();
  session.destroy();
  return NextResponse.json({ ok: true });
}
