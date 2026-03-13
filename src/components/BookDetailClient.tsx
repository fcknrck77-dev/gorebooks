'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from './Navbar';
import { Book } from '@/lib/books';

export default function BookDetailClient({ book, seriesBooks }: { book: Book; seriesBooks: Book[] }) {
  const [selectedFormat, setSelectedFormat] = useState(book.formats?.[0] ?? null);
  const router = useRouter();

  function handleBuy() {
    if (!selectedFormat && book.type === 'book') return;
    const params = new URLSearchParams({
      title: book.title,
      format: selectedFormat?.type || 'Único',
      price: selectedFormat?.price || book.price,
    });
    router.push(`/checkout?${params.toString()}`);
  }

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: '70px' }} />

      {/* Hero: cover + info */}
      <section style={{ background: 'linear-gradient(to bottom, #0d0d0d, var(--bg-deep))', padding: '6rem 0 5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 320px) 1fr', gap: '5rem', alignItems: 'start' }}>
            {/* Cover */}
            <div>
              <div style={{ border: '1px solid var(--border)', boxShadow: '0 24px 60px rgba(0,0,0,0.7)', position: 'relative', overflow: 'hidden' }}>
                {book.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={book.image} alt={book.title} style={{ width: '100%', display: 'block' }} />
                ) : (
                  <div style={{ aspectRatio: '2/3', background: '#111', display: 'grid', placeItems: 'center', fontSize: '3rem' }}>📖</div>
                )}
                {book.is_upcoming && (
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span className="badge-soon">Próximamente</span>
                  </div>
                )}
                {book.stock === 0 && !book.is_upcoming && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'grid', placeItems: 'center', zIndex: 10 }}>
                    <span style={{ background: 'var(--accent)', color: 'white', padding: '0.4rem 1rem', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.15em' }}>AGOTADO</span>
                  </div>
                )}
              </div>

              {/* Back cover */}
              {book.back_image && (
                <div style={{ marginTop: '1rem', border: '1px solid var(--border)', opacity: 0.7 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={book.back_image} alt="Contraportada" style={{ width: '100%', display: 'block' }} />
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {book.series && (
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                  ✦ {book.series}{book.series_number ? ` — Volumen ${book.series_number}` : ''}
                </p>
              )}

              <h1 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05, marginBottom: book.subtitle ? '0.5rem' : '1.5rem' }}>
                {book.title}
              </h1>

              {book.original_price && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                   <span style={{ background: '#4a8', color: 'black', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 700 }}>OFERTA</span>
                   <s style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>{book.original_price} €</s>
                </div>
              )}

              {book.subtitle && !book.series && (
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  {book.subtitle}
                </p>
              )}

              <div className="divider-ornament">✦</div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '560px' }}>
                {book.description}
              </p>

              {/* Format selector + buy */}
              {!book.is_upcoming && (
                <div>
                  {book.type === 'book' && book.formats && book.formats.length > 0 && (
                    <>
                      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                        Seleccionar formato
                      </p>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                        {book.formats.map((f, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedFormat(f)}
                            style={{
                              fontFamily: 'var(--font-ui)',
                              fontSize: '0.65rem',
                              fontWeight: 600,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              padding: '0.5rem 1.25rem',
                              background: selectedFormat?.type === f.type ? 'var(--accent)' : 'transparent',
                              border: `1px solid ${selectedFormat?.type === f.type ? 'var(--accent)' : 'var(--border)'}`,
                              color: selectedFormat?.type === f.type ? 'white' : 'var(--text-muted)',
                              cursor: 'pointer',
                              transition: 'all 0.25s',
                            }}
                          >
                            {f.type} — {f.price} €
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {book.type === 'merch' && book.variants && book.variants.length > 0 && (
                    <div style={{ marginBottom: '2rem' }}>
                       {book.variants.map((v, i) => (
                         <div key={i} style={{ marginBottom: '1rem' }}>
                            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                              {v.name}
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                               {v.options.map(opt => (
                                 <button key={opt} style={{ padding: '0.4rem 1rem', border: '1px solid var(--border)', background: 'none', color: 'white', fontSize: '0.7rem' }}>{opt}</button>
                               ))}
                            </div>
                         </div>
                       ))}
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button
                      onClick={handleBuy}
                      disabled={book.stock === 0}
                      className="btn-primary"
                      style={{ border: 'none', cursor: book.stock === 0 ? 'default' : 'pointer', fontSize: '0.75rem', letterSpacing: '0.2em', padding: '0.9rem 2.5rem', opacity: book.stock === 0 ? 0.5 : 1 }}
                    >
                      {book.stock === 0 ? 'AGOTADO' : `Comprar — ${selectedFormat?.price ?? book.price} €`}
                    </button>
                  </div>
                </div>
              )}

              {book.is_upcoming && (
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginTop: '1rem' }}>
                  Próximamente disponible. Síguenos en redes para la fecha de lanzamiento.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis */}
      {book.synopsis && (
        <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>✦ Sinopsis</p>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: 2, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
              {book.synopsis}
            </div>
          </div>
        </section>
      )}

      {/* Characters */}
      {book.characters && book.characters.length > 0 && (
        <section style={{ padding: '6rem 0', background: 'var(--bg-dark)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <p className="section-label" style={{ marginBottom: '3rem', textAlign: 'center' }}>✦ Personajes</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {book.characters.map((char, i) => (
                <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Personaje
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '1rem' }}>{char.name}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{char.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Series related books */}
      {seriesBooks.length > 0 && (
        <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <p className="section-label" style={{ marginBottom: '1rem' }}>✦ También de la saga</p>
            <h2 className="display-title" style={{ fontSize: '1.8rem', marginBottom: '3rem' }}>{book.series}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '2rem' }}>
              {seriesBooks.map((b) => (
                <Link key={b.slug} href={`/libros/${b.slug}`} style={{ display: 'block' }}>
                  <div style={{ border: '1px solid var(--border)', overflow: 'hidden', marginBottom: '0.75rem', transition: 'border-color 0.3s' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.image} alt={b.title} style={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem' }}>{b.title}</p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '0.2rem', letterSpacing: '0.08em' }}>{b.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer mini */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2.5rem', textAlign: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          ← Volver al catálogo
        </Link>
      </footer>
    </div>
  );
}
