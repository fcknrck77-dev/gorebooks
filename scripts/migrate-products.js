const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const db = new Database('gorebooks.db');
const booksJsonPath = path.join(process.cwd(), 'src/data/books.json');

if (!fs.existsSync(booksJsonPath)) {
  console.log('No books.json found.');
  process.exit(0);
}

const books = JSON.parse(fs.readFileSync(booksJsonPath, 'utf-8'));

const insert = db.prepare(`
  INSERT INTO products (
    id, type, slug, title, subtitle, description, synopsis, image, back_image,
    price, original_price, stock, is_upcoming, is_pack, is_featured,
    category, series, series_number, formats_json, characters_json, amazon_url
  ) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, 
    ?, ?, ?, ?, ?, ?, 
    ?, ?, ?, ?, ?, ?
  )
`);

db.transaction(() => {
  // Clear existing products to avoid conflicts during migration
  db.prepare('DELETE FROM products').run();

  for (const b of books) {
    const mainPrice = b.formats && b.formats.length > 0 ? b.formats[0].price : '0,00';
    const slug = b.slug || b.id; // Use id as fallback for slug
    
    insert.run(
      b.id,
      'book',
      slug,
      b.title,
      b.subtitle || null,
      b.description,
      b.synopsis || null,
      b.cover,
      b.backCover || null,
      mainPrice,
      null, // original_price
      b.stock || 0,
      b.isUpcoming ? 1 : 0,
      b.isPack ? 1 : 0,
      b.featured ? 1 : 0,
      b.series ? 'Serie' : 'Novela',
      b.series || null,
      b.seriesNumber || null,
      JSON.stringify(b.formats || []),
      JSON.stringify(b.characters || []),
      b.amazonUrl || null
    );
  }
})();

console.log('Migration complete!');
