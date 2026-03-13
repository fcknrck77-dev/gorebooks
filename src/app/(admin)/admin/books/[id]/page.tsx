'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

interface BookFormState {
  id: string;
  title: string;
  description: string;
  cover: string;
  amazonUrl: string;
  series?: string;
  isUpcoming?: boolean;
  isPack?: boolean;
  formatsJson: string;
}

export default function EditBookPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [form, setForm] = useState<BookFormState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/admin/books/${id}`);
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error ?? 'No se pudo cargar el libro');
        }
        const data = await res.json();
        setForm({
          id: data.id,
          title: data.title ?? '',
          description: data.description ?? '',
          cover: data.cover ?? '',
          amazonUrl: data.amazonUrl ?? '',
          series: data.series,
          isUpcoming: data.isUpcoming,
          isPack: data.isPack,
          formatsJson: JSON.stringify(data.formats ?? [], null, 2),
        });
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  function update<K extends keyof BookFormState>(key: K, value: BookFormState[K]) {
    setForm(prev => (prev ? { ...prev, [key]: value } : prev));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form) return;
    setSaving(true);
    setError(null);

    try {
      const formats = form.formatsJson ? JSON.parse(form.formatsJson) : [];

      const res = await fetch(`/api/admin/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.trim(),
          description: form.description.trim(),
          cover: form.cover.trim(),
          amazonUrl: form.amazonUrl.trim(),
          series: form.series?.trim() || undefined,
          isUpcoming: form.isUpcoming || undefined,
          isPack: form.isPack || undefined,
          formats,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'No se pudo guardar el libro');
      }

      router.push('/admin/books');
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm('¿Seguro que quieres eliminar este libro? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/books/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'No se pudo eliminar el libro');
      }
      router.push('/admin/books');
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
    }
  }

  if (loading || !form) {
    return (
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        Cargando libro…
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              marginBottom: '0.25rem',
            }}
          >
            Editar libro
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            ID: <code>{form.id}</code>
          </p>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          style={{
            padding: '0.45rem 1rem',
            borderRadius: '999px',
            border: '1px solid #552222',
            background: 'transparent',
            color: '#ff6b6b',
            fontSize: '0.78rem',
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Eliminar
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1.3fr)',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'grid', gap: '0.9rem' }}>
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
              value={form.series ?? ''}
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
                checked={!!form.isUpcoming}
                onChange={e => update('isUpcoming', e.target.checked)}
              />
              Próximo lanzamiento
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <input
                type="checkbox"
                checked={!!form.isPack}
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
          disabled={saving}
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
            cursor: saving ? 'default' : 'pointer',
            opacity: saving ? 0.8 : 1,
          }}
        >
          {saving ? 'Guardando…' : 'Guardar cambios'}
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

