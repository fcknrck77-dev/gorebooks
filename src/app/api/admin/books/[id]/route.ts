import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';
import { getBook, updateBook, deleteBook } from '@/lib/booksStore';
import type { Book } from '@/data/books';

async function requireAdmin() {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return null;
  }
  return session;
}

interface RouteContext {
  params: { id: string };
}

export async function GET(_req: NextRequest, context: RouteContext) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const book = await getBook(context.params.id);
  if (!book) {
    return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  }

  return NextResponse.json(book);
}

export async function PUT(req: NextRequest, context: RouteContext) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as Partial<Book>;

  try {
    const updated = await updateBook(context.params.id, body);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message ?? 'Error al actualizar el libro' },
      { status: 400 }
    );
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    await deleteBook(context.params.id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message ?? 'Error al eliminar el libro' },
      { status: 400 }
    );
  }
}

