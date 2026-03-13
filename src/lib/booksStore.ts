import { promises as fs } from 'fs';
import path from 'path';
import type { Book } from '../data/books';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'books.json');

async function readFile(): Promise<Book[]> {
  const raw = await fs.readFile(DATA_PATH, 'utf8');
  return JSON.parse(raw) as Book[];
}

async function writeFile(books: Book[]): Promise<void> {
  const json = JSON.stringify(books, null, 2);
  await fs.writeFile(DATA_PATH, json, 'utf8');
}

export async function getBooks(): Promise<Book[]> {
  return readFile();
}

export async function getBook(id: string): Promise<Book | undefined> {
  const books = await readFile();
  return books.find(b => b.id === id);
}

export async function createBook(book: Book): Promise<Book> {
  const books = await readFile();
  if (books.some(b => b.id === book.id)) {
    throw new Error('Ya existe un libro con ese ID');
  }
  const updated = [...books, book];
  await writeFile(updated);
  return book;
}

export async function updateBook(id: string, partial: Partial<Book>): Promise<Book> {
  const books = await readFile();
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    throw new Error('Libro no encontrado');
  }
  const updatedBook = { ...books[index], ...partial };
  const updated = [...books];
  updated[index] = updatedBook;
  await writeFile(updated);
  return updatedBook;
}

export async function deleteBook(id: string): Promise<void> {
  const books = await readFile();
  const updated = books.filter(b => b.id !== id);
  await writeFile(updated);
}

