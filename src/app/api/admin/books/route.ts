import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';
import { getProducts, addProduct, updateProduct, deleteProduct, Product } from '@/lib/books';

async function checkAdmin() {
  const session = await getAdminSession();
  return !!session.isAdmin;
}

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const url = new URL(req.url);
  const type = url.searchParams.get('type') as 'book' | 'merch' | null;
  
  const products = getProducts(type || undefined);
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  if (!await checkAdmin()) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  try {
    const product = await req.json();
    addProduct(product);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error('API POST error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!await checkAdmin()) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  try {
    const { id, ...data } = await req.json();
    updateProduct(id, data);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error('API PUT error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!await checkAdmin()) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  try {
    const { id } = await req.json();
    deleteProduct(id);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
