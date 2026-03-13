import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { encrypt } from '@/lib/crypto';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/session';
import { cookies } from 'next/headers';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<any>(cookieStore, sessionOptions);
    
    // Check if user is logged in
    if (!session.userId) {
      return NextResponse.json({ error: 'Debes estar registrado para comprar.' }, { status: 401 });
    }

    const body = await req.json();
    const {
      bookId, bookTitle, format, price,
      fullName, address, portal, piso, zip, city, province, phone, deliveryTime, notes
    } = body;

    const orderId = crypto.randomUUID();

    db.prepare(`
      INSERT INTO orders (
        id, user_id, book_id, book_title, format, price,
        full_name_enc, address_enc, portal_enc, piso_enc, zip_enc,
        city_enc, province_enc, phone_enc, delivery_time_enc, notes_enc,
        status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      orderId,
      session.userId,
      bookId,
      bookTitle,
      format,
      price,
      encrypt(fullName),
      encrypt(address),
      encrypt(portal),
      encrypt(piso),
      encrypt(zip),
      encrypt(city),
      encrypt(province),
      encrypt(phone),
      encrypt(deliveryTime),
      encrypt(notes),
      'pending'
    );

    return NextResponse.json({ success: true, orderId });
  } catch (error) {
    console.error('Order error:', error);
    return NextResponse.json({ error: 'Error al procesar el pedido.' }, { status: 500 });
  }
}
