const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.resolve('gorebooks.db');
const booksJsonPath = path.resolve('src/data/books.json');

const db = new Database(dbPath);

async function migrate() {
  if (!fs.existsSync(booksJsonPath)) {
    console.log('No books.json found. Skipping migration.');
    return;
  }

  // Asegurar que la tabla existe con el esquema correcto
  db.exec(`
    CREATE TABLE IF NOT EXISTS books (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE,
      title TEXT,
      author TEXT,
      price TEXT,
      ebook_price TEXT,
      pack_price TEXT,
      image TEXT,
      description TEXT,
      category TEXT,
      is_pack INTEGER DEFAULT 0,
      is_new INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const books = JSON.parse(fs.readFileSync(booksJsonPath, 'utf8'));
  
  const insert = db.prepare(`
    INSERT OR REPLACE INTO books (id, slug, title, author, price, ebook_price, pack_price, image, description, category, is_pack, is_new)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const migration = db.transaction((booksData) => {
    for (const book of booksData) {
      insert.run(
        book.id,
        book.slug,
        book.title,
        book.author,
        book.price,
        book.ebookPrice,
        book.packPrice || null,
        book.image,
        book.description,
        book.category || 'Varios',
        book.isPack ? 1 : 0,
        book.isNew ? 1 : 0
      );
    }
  });

  migration(books);
  console.log('Migration successful: books.json -> SQLite');
}

migrate();
