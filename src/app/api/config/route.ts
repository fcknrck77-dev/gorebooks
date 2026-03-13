import { NextResponse } from 'next/server';
import db from '@/lib/db';

// Public API: returns all non-sensitive config values for the frontend
export async function GET() {
  try {
    const config = db.prepare('SELECT key, value FROM site_config').all() as any[];
    const configMap = config.reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    return NextResponse.json(configMap, {
      headers: { 'Cache-Control': 'no-store, must-revalidate' }
    });
  } catch (e) {
    return NextResponse.json({}, { status: 500 });
  }
}
