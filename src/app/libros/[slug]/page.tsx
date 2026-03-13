import { getBooks, getBookBySlug } from '@/lib/books';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import BookDetailClient from '@/components/BookDetailClient';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBooks().map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: 'Libro no encontrado | Gore Books' };
  return {
    title: `${book.title} | Gore Books`,
    description: book.description,
    openGraph: { images: [book.cover] },
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const seriesBooks = book.series
    ? getBooks().filter(b => b.series === book.series && b.slug !== book.slug)
    : [];

  return <BookDetailClient book={book} seriesBooks={seriesBooks} />;
}
