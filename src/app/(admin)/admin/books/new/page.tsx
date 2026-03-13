'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBookPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    id: '',
    title: '',
    description: '',
    cover: '',
    amazonUrl: '',
    series: '',
    isUpcoming: false,
    isPack: false,
    formatsJson: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formats = form.formatsJson
        ? JSON.parse(form.formatsJson)
        : [];

      const res = await fetch('/api/admin/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: form.id.trim(),
          title: form.title.trim(),
          description: form.description.trim(),
          cover: form.cover.trim(),
          amazonUrl: form.amazonUrl.trim(),
          series: form.series.trim() || undefined,
          isUpcoming: form.isUpcoming || undefined,
          isPack: form.isPack || undefined,
          formats,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'No se pudo crear el libro');
      }

      router.push('/admin/books');
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            marginBottom: '0.25rem',
          }}
        >
          Nuevo libro
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Rellena la ficha básica. Puedes pegar las tarifas en formato JSON.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1.3fr)',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'grid', gap: '0.9rem' }}>
          <Field label="ID interno" helper="Sin espacios. Se usa en URLs y referencias.">
            <input
              required
              value={form.id}
              onChange={e => update('id', e.target.value)}
              style={inputStyle}
            />
          </Field>

          <Field label="Título">
            <input
              required
              value={form.title}
              onChange={e => update('title', e.target.value)}
              style={inputStyle}
            />
          </Field>

          <Field label="Saga / Serie" helper="Opcional. Ej: Hijos del Hielo, Mise en Place…">
            <input
              value={form.series}
              onChange={e => update('series', e.target.value)}
              style={inputStyle}
            />
          </Field>

          <Field label="Descripción / Sinopsis">
            <textarea
              value={form.description}
              onChange={e => update('description', e.target.value)}
              rows={4}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </Field>

          <Field label="URL Amazon">
            <input
              value={form.amazonUrl}
              onChange={e => update('amazonUrl', e.target.value)}
              style={inputStyle}
            />
          </Field>
        </div>

        <div style={{ display: 'grid', gap: '0.9rem' }}>
          <Field label="URL de portada">
            <input
              value={form.cover}
              onChange={e => update('cover', e.target.value)}
              style={inputStyle}
            />
          </Field>

          <Field
            label="Formatos y precios (JSON)"
            helper='Ejemplo: [{"type":"Kindle","price":"0,89"},{"type":"Tapa Blanda","price":"13,00"}]'
          >
            <textarea
              value={form.formatsJson}
              onChange={e => update('formatsJson', e.target.value)}
              rows={6}
              style={{ ...inputStyle, fontFamily: 'monospace', fontSize: '0.8rem', resize: 'vertical' }}
            />
          </Field>

          <div
            style={{
              display: 'flex',
              gap: '1.2rem',
              marginTop: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
            }}
          >
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <input
                type="checkbox"
                checked={form.isUpcoming}
                onChange={e => update('isUpcoming', e.target.checked)}
              />
              Próximo lanzamiento
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <input
                type="checkbox"
                checked={form.isPack}
                onChange={e => update('isPack', e.target.checked)}
              />
              Pack
            </label>
          </div>
        </div>
      </div>

      {error && (
        <p style={{ color: '#ff6b6b', fontSize: '0.85rem' }}>
          {error}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
        <button
          type="button"
          onClick={() => router.push('/admin/books')}
          style={{
            padding: '0.55rem 1.1rem',
            borderRadius: '999px',
            border: '1px solid var(--border)',
            background: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.55rem 1.3rem',
            borderRadius: '999px',
            border: '1px solid var(--accent)',
            background: 'var(--accent)',
            color: '#000',
            fontSize: '0.8rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 600,
            cursor: loading ? 'default' : 'pointer',
            opacity: loading ? 0.8 : 1,
          }}
        >
          {loading ? 'Guardando…' : 'Crear libro'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  helper,
  children,
}: {
  label: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'grid', gap: '0.3rem' }}>
      <label
        style={{
          fontSize: '0.78rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
        }}
      >
        {label}
      </label>
      {children}
      {helper && (
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {helper}
        </p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.55rem 0.75rem',
  borderRadius: '0.35rem',
  border: '1px solid var(--border)',
  background: '#050505',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
};

