import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';
import db from '@/lib/db';
import { decrypt } from '@/lib/crypto';

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const url = new URL(req.url);
  const userId = url.searchParams.get('userId');

  try {
    let query = 'SELECT * FROM orders ORDER BY created_at DESC';
    let params: any[] = [];
    
    if (userId) {
      query = 'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC';
      params = [userId];
    }

    const orders = db.prepare(query).all(...params) as any[];
    
    // Descifrar datos para cada pedido
    const decryptedOrders = orders.map(order => {
      const d = (val: string | null) => {
        if (!val) return null;
        try {
          return decrypt(val);
        } catch (e) {
          return val;
        }
      };

      return {
        ...order,
        address: d(order.address_enc),
        phone: d(order.phone_enc),
        notes: d(order.notes_enc),
        zip: d(order.zip_enc),
        city: d(order.city_enc),
        province: d(order.province_enc),
        portal: d(order.portal_enc),
        piso: d(order.piso_enc),
        puerta: d(order.puerta_enc),
        delivery_time: d(order.delivery_time_enc),
        full_name: d(order.full_name_enc),
      };
    });

    return NextResponse.json(decryptedOrders);
  } catch (error) {
    console.error("Orders fetch error", error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getAdminSession();
  if (!session.isAdmin) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

  try {
    const { id, status } = await req.json();
    db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Error al actualizar pedido' }, { status: 500 });
  }
}
