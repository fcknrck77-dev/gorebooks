'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product, BookFormat } from '../lib/books';
import Link from 'next/link';

export default function BookCard({ book }: { book: Product }) {
  const [selectedFormat, setSelectedFormat] = useState<BookFormat | null>(
    (book.formats && book.formats.length > 0) ? book.formats[0] : null
  );
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  function handleBuy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!selectedFormat && book.type === 'book') return;
    
    const params = new URLSearchParams({
      title: book.title,
      format: selectedFormat?.type || 'Único',
      price: selectedFormat?.price || book.price,
    });
    router.push(`/checkout?${params.toString()}`);
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.4s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
    >
      {/* Cover */}
      <Link href={`/libros/${book.slug}`} style={{ display: 'block' }}>
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '2/3',
        overflow: 'hidden',
        marginBottom: '1rem',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        transition: 'border-color 0.4s ease',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.6)' : '0 4px 12px rgba(0,0,0,0.4)',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.image}
          alt={book.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
        {book.is_upcoming && (
          <div style={{ position: 'absolute', bottom: '0.6rem', left: '0.6rem' }}>
            <span className="badge-soon">Próximamente</span>
          </div>
        )}
        {book.stock === 0 && !book.is_upcoming && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'grid', placeItems: 'center', zIndex: 10 }}>
            <span style={{ background: 'var(--accent)', color: 'white', padding: '0.4rem 1rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em' }}>AGOTADO</span>
          </div>
        )}
        {book.original_price && (
          <div style={{ position: 'absolute', top: '0.6rem', right: '0.6rem' }}>
            <span style={{ background: '#4a8', color: 'black', padding: '0.2rem 0.6rem', fontSize: '0.6rem', fontWeight: 700 }}>OFERTA</span>
          </div>
        )}
      </div>
      </Link>

      {/* Info */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '1.05rem',
        lineHeight: 1.25,
        marginBottom: '0.3rem',
        color: 'var(--text-primary)',
      }}>
        {book.title}
      </h3>

      {!book.is_upcoming && (
        <>
          {/* Format selector for books */}
          {book.type === 'book' && book.formats && book.formats.length > 0 && (
            <div style={{ display: 'flex', gap: '0.3rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              {book.formats.map((f, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); setSelectedFormat(f); }}
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    padding: '0.2rem 0.5rem',
                    background: selectedFormat?.type === f.type ? 'var(--accent)' : 'transparent',
                    border: `1px solid ${selectedFormat?.type === f.type ? 'var(--accent)' : 'var(--border)'}`,
                    color: selectedFormat?.type === f.type ? 'white' : 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                >
                  {f.type}
                </button>
              ))}
            </div>
          )}

          {/* Price + buy */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.8rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--accent-gold)',
              }}>
                {selectedFormat ? `${selectedFormat.price} €` : `${book.price} €`}
              </span>
              {book.original_price && (
                <s style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{book.original_price} €</s>
              )}
            </div>
            <button
              onClick={handleBuy}
              disabled={book.stock === 0}
              className="btn-ghost"
              style={{ padding: '0.4rem 1rem', fontSize: '0.58rem', border: '1px solid var(--border)', background: 'transparent', color: book.stock === 0 ? '#333' : 'var(--text-secondary)', cursor: book.stock === 0 ? 'default' : 'pointer', opacity: book.stock === 0 ? 0.5 : 1 }}
            >
              {book.stock === 0 ? 'AGOTADO' : 'Comprar →'}
            </button>
          </div>
        </>
      )}

      {book.is_upcoming && (
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem', letterSpacing: '0.05em' }}>
          Disponible próximamente
        </p>
      )}
    </div>
  );
}
