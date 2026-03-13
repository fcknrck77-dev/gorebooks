import { NextResponse } from 'next/server';
import db from '@/lib/db';

// Serves a CSS stylesheet of custom properties from the database
// Include <link rel="stylesheet" href="/api/theme"> in your layout
export async function GET() {
  try {
    const config = db.prepare('SELECT key, value FROM site_config').all() as any[];
    const configMap = config.reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});

    const css = `
      :root {
        --theme-accent: ${configMap.color_accent || '#a00000'};
        --theme-accent-gold: ${configMap.color_gold || '#c9a84c'};
        --theme-bg-deep: ${configMap.color_bg || '#050505'};
        --theme-text-primary: ${configMap.color_text || '#e8e6e1'};
      }
    `.trim();

    return new Response(css, {
      headers: {
        'Content-Type': 'text/css',
        'Cache-Control': 'no-store, must-revalidate',
      },
    });
  } catch (e) {
    return new Response(':root {}', { headers: { 'Content-Type': 'text/css' } });
  }
}
