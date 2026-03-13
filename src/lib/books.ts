import db from './db';
import crypto from 'crypto';

export interface BookFormat {
  type: string;
  price: string;
}

export interface Character {
  name: string;
  description: string;
}

export interface ProductVariant {
  name: string;
  options: string[]; // ['S', 'M', 'L'] or ['Rojo', 'Azul']
}

export interface Product {
  id: string;
  type: 'book' | 'merch';
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  synopsis?: string;
  image: string; // Previously 'cover'
  back_image?: string; // Previously 'backCover'
  price: string;
  original_price?: string;
  stock: number;
  is_upcoming: boolean;
  is_pack: boolean;
  is_featured: boolean;
  category: string;
  series?: string;
  series_number?: number;
  formats: BookFormat[];
  variants: ProductVariant[];
  characters: Character[];
  amazon_url?: string;
  created_at: string;
}

// Map database row to Product interface
function mapRow(row: any): Product {
  return {
    ...row,
    is_upcoming: !!row.is_upcoming,
    is_pack: !!row.is_pack,
    is_featured: !!row.is_featured,
    formats: JSON.parse(row.formats_json || '[]'),
    variants: JSON.parse(row.variants_json || '[]'),
    characters: JSON.parse(row.characters_json || '[]'),
  };
}

export function getProducts(type?: 'book' | 'merch'): Product[] {
  let query = 'SELECT * FROM products ORDER BY created_at DESC';
  if (type) {
    const stmt = db.prepare('SELECT * FROM products WHERE type = ? ORDER BY created_at DESC');
    return stmt.all(type).map(mapRow);
  }
  return db.prepare(query).all().map(mapRow);
}

// Unified export
export type Book = Product;

export function getBooks(): Product[] {
  return getProducts('book');
}

export function getProductBySlug(slug: string): Product | undefined {
  const row = db.prepare('SELECT * FROM products WHERE slug = ?').get(slug);
  return row ? mapRow(row) : undefined;
}

export function getBookBySlug(slug: string): Product | undefined {
  const p = getProductBySlug(slug);
  return (p && p.type === 'book') ? p : undefined;
}

export function addProduct(p: Partial<Product>) {
  const stmt = db.prepare(`
    INSERT INTO products (
      id, type, slug, title, subtitle, description, synopsis, image, back_image,
      price, original_price, stock, is_upcoming, is_pack, is_featured,
      category, series, series_number, formats_json, variants_json, 
      characters_json, amazon_url
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, 
      ?, ?, ?, ?, ?, ?, 
      ?, ?, ?, ?, ?, ?, ?
    )
  `);
  stmt.run(
    p.id || crypto.randomUUID(),
    p.type || 'book',
    p.slug,
    p.title,
    p.subtitle || null,
    p.description || null,
    p.synopsis || null,
    p.image || null,
    p.back_image || null,
    p.price || '0,00',
    p.original_price || null,
    p.stock || 0,
    p.is_upcoming ? 1 : 0,
    p.is_pack ? 1 : 0,
    p.is_featured ? 1 : 0,
    p.category || null,
    p.series || null,
    p.series_number || null,
    JSON.stringify(p.formats || []),
    JSON.stringify(p.variants || []),
    JSON.stringify(p.characters || []),
    p.amazon_url || null
  );
}

export function updateProduct(id: string, p: Partial<Product>) {
  // Filter out non-database fields and handle JSON fields
  const jsonKeys = ['formats', 'variants', 'characters'];
  const updateData: any = { ...p };
  
  jsonKeys.forEach(key => {
    if ((p as any)[key]) {
      updateData[`${key}_json`] = JSON.stringify((p as any)[key]);
      delete updateData[key];
    }
  });

  const fields = Object.keys(updateData).filter(k => k !== 'id' && k !== 'created_at');
  if (fields.length === 0) return;

  const query = `UPDATE products SET ${fields.map(f => `${f} = ?`).join(', ')} WHERE id = ?`;
  const values = fields.map(f => {
    const val = updateData[f];
    if (typeof val === 'boolean') return val ? 1 : 0;
    return val === undefined ? null : val;
  });

  db.prepare(query).run(...values, id);
}

export function deleteProduct(id: string) {
  db.prepare('DELETE FROM products WHERE id = ?').run(id);
}

// Legacy wrappers (using new fields)
export const addBook = (b: any) => addProduct(b);
export const updateBook = (id: string, b: any) => updateProduct(id, b);
export const deleteBook = (id: string) => deleteProduct(id);
