import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';
import db from '@/lib/db';

export async function GET() {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    // Fetch users with order stats
    // Note: price is stored as string '12,99', so parsing for sum is tricky in pure SQLite without extension but we can get counts
    const users = db.prepare(`
      SELECT 
        u.id, 
        u.email, 
        u.created_at,
        (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count
      FROM users u
      ORDER BY u.created_at DESC
    `).all();
    
    return NextResponse.json(users);
  } catch (error) {
    console.error("Users fetch error", error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
