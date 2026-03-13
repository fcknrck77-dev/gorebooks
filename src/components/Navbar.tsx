'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '1.2rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(8, 8, 8, 0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(34,34,34,0.8)' : '1px solid transparent',
      transition: 'background 0.5s ease, border-color 0.5s ease',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      {/* Logo */}
      <Link href="/" style={{
        fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.6rem',
        letterSpacing: '0.12em', color: 'var(--text-primary)',
      }}>
        GORE<span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>BOOKS</span>
      </Link>

      {/* Nav Links */}
      <div style={{
        display: 'flex', gap: '2.5rem', alignItems: 'center'
      }}>
        {['#novelas', '#sagas', '#proximos', '#packs', '#autor'].map((href, i) => (
          <Link key={i} href={href} style={{
            fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 500,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)',
            transition: 'color 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            {['Novelas', 'Sagas', 'Próximos', 'Packs', 'Autor'][i]}
          </Link>
        ))}

        <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem', alignItems: 'center' }}>
          <Link href="/mi-cuenta" style={{
            fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white',
            background: 'var(--accent)', padding: '0.6rem 1.2rem', borderRadius: '2px',
            transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            👤 Mi Cuenta
          </Link>
          
          {/* Admin shortcut visible if logged as admin */}
          <Link href="/admin/dashboard" style={{
            fontFamily: 'var(--font-ui)', fontSize: '0.55rem', color: 'var(--text-muted)',
            letterSpacing: '0.1em', transition: 'color 0.3s'
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            PANEL
          </Link>
        </div>
      </div>
    </nav>
  );
}
