import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BookCard from '../components/BookCard';
import { getBooks } from '../lib/books';
import Footer from '../components/Footer';

function SectionHeading({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <p className="section-label" style={{ marginBottom: '1rem' }}>{label}</p>
      <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: subtitle ? '1rem' : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const books = getBooks();
  
  const independentBooks = books.filter(b => !b.series && !b.is_upcoming && !b.is_pack);
  const sagas = [...new Set(books.map(b => b.series).filter(Boolean))];
  const upcoming = books.filter(b => b.is_upcoming);
  const packs = books.filter(b => b.is_pack);

  return (
    <main style={{ background: 'var(--bg-deep)' }}>
      <Navbar />
      <Hero />

      {/* ── NOVELAS INDEPENDIENTES ── */}
      <section id="novelas" style={{ padding: '7rem 0', background: 'var(--bg-deep)' }}>
        <div className="container">
          <SectionHeading
            label="✦ Catálogo"
            title={<>Novelas <em>Independientes</em></>}
            subtitle="Obras individuales que exploran el terror desde ángulos únicos e inesperados."
          />
          <div className="book-grid">
            {independentBooks.map(book => <BookCard key={book.id} book={book} />)}
          </div>
        </div>
      </section>

      {/* ── THIN SEPARATOR ── */}
      <div style={{ borderTop: '1px solid var(--border)', margin: '0 2.5rem' }} />

      {/* ── SAGAS ── */}
      {sagas.length > 0 && (
        <section id="sagas" style={{ padding: '7rem 0', background: 'var(--bg-dark)' }}>
          <div className="container">
            <SectionHeading
              label="✦ Universos"
              title={<>Las <em>Sagas</em></>}
              subtitle="Mundos expansivos donde la oscuridad crece de entrega en entrega."
            />

            {sagas.map(sagaName => (
              <div key={sagaName} style={{ marginBottom: '5rem' }}>
                <div className="saga-header">
                  <h3 className="display-title" style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    {sagaName}
                  </h3>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>
                <div className="book-grid">
                  {books.filter(b => b.series === sagaName).map(book => <BookCard key={book.id} book={book} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PROXIMOS ── */}
      {upcoming.length > 0 && (
        <section id="proximos" style={{
          padding: '7rem 0',
          background: 'var(--bg-deep)',
          borderTop: '1px solid var(--border)'
        }}>
          <div className="container">
            <SectionHeading
              label="✦ Anticipaciones"
              title={<>Próximos <em>Lanzamientos</em></>}
              subtitle="La oscuridad nunca descansa. Nuevas pesadillas en camino."
            />
            <div className="book-grid">
              {upcoming.map(book => <BookCard key={book.id} book={book} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── PACKS ── */}
      {packs.length > 0 && (
        <section id="packs" style={{
          padding: '7rem 0',
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div className="container">
            <SectionHeading
              label="✦ Ofertas Especiales"
              title={<>Packs &amp; <em>Colecciones</em></>}
              subtitle="Ediciones especiales, packs de saga y merchandising exclusivo."
            />
            <div className="book-grid">
              {packs.map(book => <BookCard key={book.id} book={book} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── AUTOR ── */}
      <section id="autor" style={{ padding: '9rem 0', background: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'center' }}>
            <div style={{
              aspectRatio: '3/4',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              filter: 'grayscale(80%) brightness(0.85)',
            }}>
              <img
                src="https://m.media-amazon.com/images/S/amzn-author-media-prod/j2l86e7cl6tuhm68v39u26o2cl._SX450_CR0%2C0%2C450%2C450_.jpg"
                alt="Jesús Fernández Rodríguez"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>✦ El Autor</p>
              <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '2rem' }}>
                Jesús Fernández<br /><em>Rodríguez</em>
              </h2>
              <div className="divider-ornament">✦</div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Escritor especializado en thrillers, terror y supervivencia. Con una narrativa cruda y
                asfixiante, sus historias exploran los límites de la resistencia humana y la oscuridad
                que habita en lo cotidiano.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                Sus obras invitan al lector a descender a las profundidades de la psique humana, donde
                la línea entre realidad y pesadilla se desvanece bajo una prosa atmosférica y audaz.
              </p>
              <a
                href="https://www.amazon.es/stores/Jesús-Fernández-Rodríguez/author/B0FKK8DTYG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Ver en Amazon ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
