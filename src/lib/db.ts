import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = path.join(process.cwd(), 'gorebooks.db');

// Ensure database directory exists (if it were in a subfolder)
// In this case it's in the root.

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

// Initialize Tables
export function initDB() {
  // Users Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Orders Table (Sensitive fields will be stored encrypted)
  db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      book_id TEXT,
      book_title TEXT,
      format TEXT,
      price TEXT,
      full_name_enc TEXT,
      address_enc TEXT,
      portal_enc TEXT,
      piso_enc TEXT,
      zip_enc TEXT,
      city_enc TEXT,
      province_enc TEXT,
      phone_enc TEXT,
      delivery_time_enc TEXT,
      notes_enc TEXT,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `);

  // Site Config Table (Wordpress-style CMS)
  db.exec(`
    CREATE TABLE IF NOT EXISTS site_config (
      key TEXT PRIMARY KEY,
      value TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Products Table (Unified Books & Merch)
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      type TEXT DEFAULT 'book', -- 'book' or 'merch'
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      synopsis TEXT,
      image TEXT,
      back_image TEXT,
      price TEXT,
      original_price TEXT, -- For offers/sales
      stock INTEGER DEFAULT 0,
      is_upcoming INTEGER DEFAULT 0,
      is_pack INTEGER DEFAULT 0,
      is_featured INTEGER DEFAULT 0,
      category TEXT,
      series TEXT,
      series_number INTEGER,
      formats_json TEXT, -- For books: Kindle, Tapa Blanda, etc.
      variants_json TEXT, -- For merch: Sizes, Colors, etc.
      characters_json TEXT, -- For books
      amazon_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  // Default Config
  const defaults = [
    { key: 'site_title', value: 'Gore Books' },
    { key: 'bizum_number', value: '+34 600 000 000' },
    { key: 'bank_iban', value: 'ES00 0000 0000 0000 0000 0000' },
    { key: 'bank_holder', value: 'Jesús Fernández Rodríguez' },
  ];

  const check = db.prepare('SELECT COUNT(*) as count FROM site_config').get() as { count: number };
  if (check.count === 0) {
    const insert = db.prepare('INSERT INTO site_config (key, value) VALUES (?, ?)');
    for (const d of defaults) {
      insert.run(d.key, d.value);
    }
  }
}

export default db;
