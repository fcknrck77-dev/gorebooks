'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [cfg, setCfg] = useState<any>({});

  useEffect(() => {
    fetch('/api/config').then(r => r.json()).then(setCfg);
  }, []);

  const line1 = cfg.hero_title_line1 || 'Where Darkness';
  const line2 = cfg.hero_title_line2 || 'Finds Its Voice.';
  const subtitle = cfg.hero_subtitle || 'Novelas de terror visceral y thriller psicológico para quienes no temen adentrarse en la oscuridad.';
  const ctaLabel = cfg.hero_cta_label || 'Explorar Catálogo';
  const ctaLink = cfg.hero_cta_link || '#novelas';
  const heroImage = cfg.hero_image || '/castle.png';
  const authorName = cfg.author_name || 'Jesús Fernández Rodríguez';

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
    }}>
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroImage}
        alt=""
        aria-hidden
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
          filter: 'brightness(0.45) saturate(0.7)',
        }}
      />

      {/* Gradient overlay bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(8,8,8,0.1) 0%, rgba(8,8,8,0.2) 40%, rgba(8,8,8,0.95) 85%, #080808 100%)',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '7rem', width: '100%' }}>
        <div style={{ maxWidth: '700px' }}>
          <p className="section-label fade-up delay-1" style={{ marginBottom: '1.5rem' }}>
            ✦ &nbsp; {authorName}
          </p>

          <h1 className="display-title fade-up delay-2" style={{
            fontSize: 'clamp(3.2rem, 6vw, 5.5rem)',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}>
            {line1}<br />
            <em style={{ color: 'var(--accent-light)' }}>{line2}</em>
          </h1>

          <p className="fade-up delay-3" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            marginBottom: '3rem',
            lineHeight: '1.75',
          }}>
            {subtitle}
          </p>

          <div className="fade-up delay-3" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href={ctaLink} className="btn-primary">{ctaLabel}</a>
            <a href="#autor" className="btn-ghost">Sobre el Autor</a>
          </div>
        </div>
      </div>
    </section>
  );
}
