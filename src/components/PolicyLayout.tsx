'use client';

import Link from 'next/link';
import Navbar from './Navbar';

export default function PolicyLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Header */}
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: '70px' }} />

      {/* Content */}
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '5rem 2.5rem 8rem' }}>
        <h1 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>
          {title}
        </h1>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '3rem' }}>
          Última actualización: Marzo 2025
        </p>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.05rem',
          lineHeight: '1.85',
          color: 'var(--text-secondary)',
        }}>
          {children}
        </div>
      </main>

      {/* Footer minimal */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 2.5rem',
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {[
          { label: 'Aviso Legal', href: '/aviso-legal' },
          { label: 'Privacidad', href: '/privacidad' },
          { label: 'Cookies', href: '/cookies' },
          { label: 'Términos', href: '/terminos' },
          { label: 'Devoluciones', href: '/devoluciones' },
        ].map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.62rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}>
            {l.label}
          </Link>
        ))}
      </footer>
    </div>
  );
}
