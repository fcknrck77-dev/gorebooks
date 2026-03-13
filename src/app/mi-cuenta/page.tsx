'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MiCuentaPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const endpoint = isLogin ? '/api/login' : '/api/register';
    
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Error en la operación');
      
      router.push('/');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-deep)', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem' 
    }}>
      <Link href="/" style={{ marginBottom: '3rem', fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
        GORE<span style={{ color: 'var(--accent)' }}>BOOKS</span>
      </Link>

      <div style={{ 
        width: '100%', 
        maxWidth: '400px', 
        background: 'rgba(15,15,15,0.95)', 
        border: '1px solid var(--border)', 
        padding: '3rem',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', background: '#050505', border: '1px solid var(--border)', padding: '0.8rem', color: 'white', fontFamily: 'var(--font-body)', outline: 'none' }} 
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Contraseña</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', background: '#050505', border: '1px solid var(--border)', padding: '0.8rem', color: 'white', fontFamily: 'var(--font-body)', outline: 'none' }} 
            />
          </div>

          {error && <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '1.25rem', textAlign: 'center' }}>{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary" 
            style={{ width: '100%', border: 'none', cursor: 'pointer', marginBottom: '1.5rem' }}
          >
            {loading ? 'CARGANDO...' : (isLogin ? 'ENTRAR' : 'REGISTRARME')}
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'} 
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', marginLeft: '0.5rem', cursor: 'pointer', fontWeight: 600 }}
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </button>
        </p>

        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <Link href="/admin/login" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Acceso Administración →
          </Link>
        </div>
      </div>
      
      <Link href="/" style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
        ← Volver a la inicio
      </Link>
    </main>
  );
}
