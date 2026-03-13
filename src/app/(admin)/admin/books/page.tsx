import Link from 'next/link';
import { getBooks } from '@/lib/booksStore';

export default async function AdminBooksPage() {
  const books = await getBooks();

  const packs = books.filter(b => b.isPack);
  const upcoming = books.filter(b => b.isUpcoming);
  const normal = books.filter(b => !b.isPack && !b.isUpcoming);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              marginBottom: '0.25rem',
            }}
          >
            Libros &amp; Catálogo
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Añade, edita o elimina libros. Marca packs y próximos lanzamientos.
          </p>
        </div>
        <Link
          href="/admin/books/new"
          style={{
            padding: '0.6rem 1.1rem',
            borderRadius: '999px',
            border: '1px solid var(--accent)',
            background: 'var(--accent)',
            color: '#000',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          Nuevo libro
        </Link>
      </div>

      <section>
        <h3
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '0.75rem',
          }}
        >
          Catálogo principal ({normal.length})
        </h3>
        <BooksTable books={normal} />
      </section>

      <section>
        <h3
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '0.75rem',
          }}
        >
          Próximos lanzamientos ({upcoming.length})
        </h3>
        <BooksTable books={upcoming} />
      </section>

      <section>
        <h3
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '0.75rem',
          }}
        >
          Packs ({packs.length})
        </h3>
        <BooksTable books={packs} />
      </section>
    </div>
  );
}

interface BooksTableProps {
  books: {
    id: string;
    title: string;
    series?: string;
    isUpcoming?: boolean;
    isPack?: boolean;
  }[];
}

function BooksTable({ books }: BooksTableProps) {
  if (!books.length) {
    return (
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          padding: '0.4rem 0',
        }}
      >
        (Vacío por ahora)
      </p>
    );
  }

  return (
    <div
      style={{
        borderRadius: '0.5rem',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        background: '#060606',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.85rem',
        }}
      >
        <thead
          style={{
            background: '#0c0c0c',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            fontSize: '0.75rem',
          }}
        >
          <tr>
            <th style={{ textAlign: 'left', padding: '0.55rem 0.9rem' }}>Título</th>
            <th style={{ textAlign: 'left', padding: '0.55rem 0.9rem' }}>Saga</th>
            <th style={{ textAlign: 'left', padding: '0.55rem 0.9rem' }}>Tipo</th>
            <th style={{ textAlign: 'right', padding: '0.55rem 0.9rem' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} style={{ borderTop: '1px solid var(--border)' }}>
              <td style={{ padding: '0.6rem 0.9rem' }}>{book.title}</td>
              <td style={{ padding: '0.6rem 0.9rem', color: 'var(--text-secondary)' }}>
                {book.series ?? '—'}
              </td>
              <td style={{ padding: '0.6rem 0.9rem', color: 'var(--text-secondary)' }}>
                {book.isPack ? 'Pack' : book.isUpcoming ? 'Próximo' : 'Libro'}
              </td>
              <td
                style={{
                  padding: '0.45rem 0.9rem',
                  textAlign: 'right',
                }}
              >
                <Link
                  href={`/admin/books/${book.id}`}
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--accent)',
                  }}
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

