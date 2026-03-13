import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';
import db from '@/lib/db';

export async function GET() {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const totalOrders = db.prepare('SELECT COUNT(*) as count FROM orders').get() as { count: number };
    const totalUsers = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
    const latestOrders = db.prepare('SELECT id, book_title, total_price, status, created_at FROM orders ORDER BY created_at DESC LIMIT 5').all();

    return NextResponse.json({
      stats: {
        orders: totalOrders.count,
        users: totalUsers.count,
      },
      latestOrders
    });
  } catch (error) {
    console.error("Dashboard stats error", error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
