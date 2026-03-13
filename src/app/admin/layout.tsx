'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch('/api/admin/auth');
        const data = await res.json();
        if (data.isAdmin) {
          setIsAdmin(true);
        } else if (pathname !== '/admin/login') {
          router.push('/admin/login');
        }
      } catch (e) {
        console.error('Error checking admin auth', e);
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, [pathname, router]);

  if (loading) return (
    <div style={{ background: '#050505', height: '100vh', display: 'grid', placeItems: 'center', color: 'var(--accent-gold)', fontFamily: 'var(--font-ui)', letterSpacing: '0.2em', fontSize: '0.75rem' }}>
      CARGANDO PANEL...
    </div>
  );

  if (!isAdmin && pathname !== '/admin/login') return null;
  if (pathname === '/admin/login') return <>{children}</>;

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { name: 'Pedidos', path: '/admin/orders', icon: '📦' },
    { name: 'Catálogo / Productos', path: '/admin/libros', icon: '🏷️' },
    { name: 'Usuarios', path: '/admin/users', icon: '👥' },
    { name: 'Configuración Web', path: '/admin/config', icon: '⚙️' },
  ];

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#050505', color: '#e0e0e0' }}>

      {/* ── SIDEBAR FIJA ── */}
      <aside style={{
        width: '260px',
        minWidth: '260px',
        height: '100vh',
        background: '#080808',
        borderRight: '1px solid #1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
        zIndex: 100,
      }}>

        {/* Logo / Header */}
        <div style={{ padding: '2rem 1.75rem', borderBottom: '1px solid #1a1a1a', flexShrink: 0 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.06em', margin: 0 }}>
              GORE<span style={{ color: 'var(--accent)' }}>BOOKS</span>
            </h1>
          </Link>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.55rem', letterSpacing: '0.3em', color: '#444', marginTop: '0.3rem', textTransform: 'uppercase' }}>
            Panel de Administración
          </p>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, paddingTop: '1rem' }}>
          {menuItems.map(item => {
            const active = pathname === item.path || pathname.startsWith(item.path + '/');
            return (
              <Link key={item.path} href={item.path} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.85rem 1.75rem',
                color: active ? '#fff' : '#666',
                background: active ? 'rgba(180,0,0,0.12)' : 'transparent',
                borderLeft: `3px solid ${active ? 'var(--accent)' : 'transparent'}`,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.78rem',
                letterSpacing: '0.04em',
              }}>
                <span style={{ fontSize: '1rem', opacity: active ? 1 : 0.6 }}>{item.icon}</span>
                <span style={{ fontWeight: active ? 600 : 400 }}>{item.name}</span>
              </Link>
            );
          })}

          {/* Separator */}
          <div style={{ borderTop: '1px solid #1a1a1a', margin: '1rem 0' }} />

          {/* Quick link: Ver la tienda */}
          <Link href="/" target="_blank" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '0.7rem 1.75rem',
            color: '#444',
            textDecoration: 'none',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.72rem',
            letterSpacing: '0.04em',
            transition: 'color 0.2s',
          }}>
            <span style={{ fontSize: '0.9rem' }}>🌐</span>
            <span>Ver la Tienda ↗</span>
          </Link>
        </nav>

        {/* Footer: logout + user */}
        <div style={{ padding: '1.25rem 1.75rem', borderTop: '1px solid #1a1a1a', flexShrink: 0 }}>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: '#333', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            Sesión activa
          </p>
          <button onClick={handleLogout} style={{
            background: 'none',
            border: '1px solid #222',
            color: '#555',
            cursor: 'pointer',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-ui)',
            letterSpacing: '0.08em',
            padding: '0.5rem 1rem',
            width: '100%',
            textAlign: 'left',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            🚪 Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* ── CONTENIDO PRINCIPAL (scrollable) ── */}
      <main style={{
        flex: 1,
        height: '100vh',
        overflowY: 'auto',
        padding: '3rem 3.5rem',
        background: '#050505',
      }}>
        {children}
      </main>

    </div>
  );
}
