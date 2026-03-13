import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/session';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getAdminSession();

  if (!session.isAdmin) {
    redirect('/admin/login');
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--bg-deep)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-ui)',
        padding: '5rem 2.5rem 3rem',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2.5rem',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            GORE<span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>BOOKS</span>{' '}
            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Admin</span>
          </h1>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginTop: '0.35rem',
            }}
          >
            Gestiona catálogo, packs y próximos lanzamientos.
          </p>
        </div>
        <form
          action="/api/admin/logout"
          method="POST"
          style={{ marginLeft: '1.5rem' }}
        >
          <button
            type="submit"
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text-secondary)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Cerrar sesión
          </button>
        </form>
      </header>

      <section
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          borderRadius: '0.75rem',
          border: '1px solid var(--border)',
          background: 'linear-gradient(145deg, #050505, #111)',
          padding: '1.8rem 2rem',
        }}
      >
        {children}
      </section>
    </main>
  );
}

