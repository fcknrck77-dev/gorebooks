'use client';

import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';

export default function Footer() {
  const [cfg, setCfg] = useState<any>({});

  useEffect(() => {
    fetch('/api/config').then(r => r.json()).then(setCfg);
  }, []);

  const copyright = cfg.footer_copyright || `© ${new Date().getFullYear()} JESÚS FERNÁNDEZ RODRÍGUEZ. TODOS LOS DERECHOS RESERVADOS.`;

  const socials = [
    { key: 'social_instagram', label: 'INSTAGRAM' },
    { key: 'social_twitter', label: 'TWITTER / X' },
    { key: 'social_facebook', label: 'FACEBOOK' },
    { key: 'social_tiktok', label: 'TIKTOK' },
    { key: 'author_amazon_url', label: 'AMAZON' },
  ].filter(s => cfg[s.key]);

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3.5rem 0 2rem',
      background: '#050505',
    }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.1rem', letterSpacing: '0.1em' }}>
            GORE<em style={{ color: 'var(--accent)' }}>BOOKS</em>
          </span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* Social links from config — fallback to static if none configured */}
            {socials.length > 0 ? socials.map(s => (
              <a
                key={s.key}
                href={cfg[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', transition: 'color 0.3s', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {s.label}
              </a>
            )) : ['Instagram', 'Twitter', 'Amazon'].map(s => (
              <NavLink key={s} href="#" style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', transition: 'color 0.3s' }}
                onMouseEnter={(e: any) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={(e: any) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {s.toUpperCase()}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
            {copyright}
          </p>
          {/* Legal links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Aviso Legal', href: '/aviso-legal' },
              { label: 'Privacidad', href: '/privacidad' },
              { label: 'Cookies', href: '/cookies' },
              { label: 'Términos', href: '/terminos' },
              { label: 'Devoluciones', href: '/devoluciones' },
            ].map(l => (
              <NavLink key={l.href} href={l.href} style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em', transition: 'color 0.3s' }}
                onMouseEnter={(e: any) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={(e: any) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
