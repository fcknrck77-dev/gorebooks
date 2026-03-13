import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/session';
import db from '@/lib/db';

export async function GET() {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const config = db.prepare('SELECT key, value FROM site_config').all() as any[];
    const configMap = config.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    return NextResponse.json(configMap);
  } catch (error) {
    console.error("Config fetch error", error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  try {
    const items = await req.json();
    const updateStmt = db.prepare('INSERT OR REPLACE INTO site_config (key, value) VALUES (?, ?)');
    
    db.transaction(() => {
      for (const [key, value] of Object.entries(items)) {
        updateStmt.run(key, value);
      }
    })();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Config update error", error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
