'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? 'Error al iniciar sesión');
        setLoading(false);
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-deep)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-ui)',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '2.5rem 3rem',
          borderRadius: '0.75rem',
          border: '1px solid var(--border)',
          background:
            'radial-gradient(circle at top, rgba(160,0,0,0.25), transparent 55%), rgba(10,10,10,0.96)',
          minWidth: '320px',
          maxWidth: '380px',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            letterSpacing: '0.12em',
            marginBottom: '1.5rem',
          }}
        >
          GORE<span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>BOOKS</span>
          <span style={{ display: 'block', fontSize: '0.8rem', marginTop: '0.35rem' }}>
            Panel de Administración
          </span>
        </h1>

        <label
          style={{
            display: 'block',
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            color: 'var(--text-secondary)',
          }}
        >
          Usuario
        </label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '0.7rem 0.9rem',
            borderRadius: '0.35rem',
            border: '1px solid var(--border)',
            background: '#050505',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            marginBottom: '1rem',
          }}
        />

        <label
          style={{
            display: 'block',
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            color: 'var(--text-secondary)',
          }}
        >
          Contraseña
        </label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '0.7rem 0.9rem',
            borderRadius: '0.35rem',
            border: '1px solid var(--border)',
            background: '#050505',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
          }}
        />

        {error && (
          <p
            style={{
              color: '#ff6b6b',
              fontSize: '0.8rem',
              marginBottom: '0.75rem',
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '999px',
            border: '1px solid var(--accent)',
            background: loading ? '#222' : 'var(--accent)',
            color: '#000',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            cursor: loading ? 'default' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </main>
  );
}

