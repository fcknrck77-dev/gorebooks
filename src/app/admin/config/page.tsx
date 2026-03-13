'use client';

import { useState, useEffect } from 'react';

// All configurable fields organized by tab
const CONFIG_SCHEMA = [
  {
    id: 'general',
    label: '🌐 General',
    fields: [
      { key: 'site_title', label: 'Título de la Web', hint: 'Aparece en la pestaña del navegador' },
      { key: 'site_tagline', label: 'Tagline / Subtítulo', hint: 'Frase bajo el logo (si aplica)' },
      { key: 'contact_email', label: 'Email de Contacto', hint: 'Se mostrará en el footer y formularios' },
      { key: 'contact_phone', label: 'Teléfono de Contacto' },
      { key: 'author_name', label: 'Nombre del Autor', hint: 'Jesús Fernández Rodríguez' },
    ],
  },
  {
    id: 'hero',
    label: '✦ Hero (Portada)',
    fields: [
      { key: 'hero_title_line1', label: 'Título Hero — Línea 1', hint: 'Primera línea del titular grande' },
      { key: 'hero_title_line2', label: 'Título Hero — Línea 2', hint: 'Segunda línea (en cursiva)' },
      { key: 'hero_subtitle', label: 'Subtítulo Hero', hint: 'Frase bajo el título principal', textarea: true },
      { key: 'hero_cta_label', label: 'Botón CTA — Texto', hint: 'Ej: "Explorar el Catálogo"' },
      { key: 'hero_cta_link', label: 'Botón CTA — Enlace', hint: 'Ej: #novelas o /libros' },
      { key: 'hero_image', label: 'Imagen de Fondo Hero', hint: 'URL de la imagen del fondo' },
    ],
  },
  {
    id: 'nav',
    label: '📌 Menú de Navegación',
    fields: [
      { key: 'nav_label_novelas', label: 'Label: Novelas', hint: 'Texto del enlace "Novelas" en el menú' },
      { key: 'nav_label_sagas', label: 'Label: Sagas' },
      { key: 'nav_label_proximos', label: 'Label: Próximos' },
      { key: 'nav_label_packs', label: 'Label: Packs' },
      { key: 'nav_label_autor', label: 'Label: Autor' },
      { key: 'nav_show_packs', label: 'Mostrar sección Packs', type: 'select', options: ['sí', 'no'] },
      { key: 'nav_show_proximos', label: 'Mostrar sección Próximos', type: 'select', options: ['sí', 'no'] },
    ],
  },
  {
    id: 'author',
    label: '👤 Sección Autor',
    fields: [
      { key: 'author_bio_p1', label: 'Biografía — Párrafo 1', textarea: true },
      { key: 'author_bio_p2', label: 'Biografía — Párrafo 2', textarea: true },
      { key: 'author_photo', label: 'Foto del Autor (URL)' },
      { key: 'author_amazon_url', label: 'URL de Amazon del Autor' },
    ],
  },
  {
    id: 'footer',
    label: '🔻 Footer',
    fields: [
      { key: 'footer_tagline', label: 'Texto Principal del Footer', hint: 'Frase destacada bajo el logo' },
      { key: 'footer_copyright', label: 'Texto de Copyright' },
      { key: 'social_instagram', label: 'Instagram (URL)' },
      { key: 'social_twitter', label: 'Twitter / X (URL)' },
      { key: 'social_facebook', label: 'Facebook (URL)' },
      { key: 'social_tiktok', label: 'TikTok (URL)' },
    ],
  },
  {
    id: 'colors',
    label: '🎨 Colores y Diseño',
    fields: [
      { key: 'color_accent', label: 'Color Acento (Rojo)', hint: 'Color principal de botones. Ej: #a00000', type: 'color' },
      { key: 'color_gold', label: 'Color Dorado / Secundario', hint: 'Precios, badges, acentos. Ej: #c9a84c', type: 'color' },
      { key: 'color_bg', label: 'Color Fondo Base', hint: 'Fondo general de la web. Ej: #050505', type: 'color' },
      { key: 'color_text', label: 'Color de Texto', hint: 'Texto principal. Ej: #e8e6e1', type: 'color' },
    ],
  },
  {
    id: 'pago',
    label: '💳 Métodos de Pago',
    fields: [
      { key: 'bizum_number', label: 'Número Bizum', hint: 'Ej: +34 600 000 000' },
      { key: 'bank_iban', label: 'IBAN Banco', hint: 'Ej: ES00 0000 0000 0000 0000 0000' },
      { key: 'bank_holder', label: 'Titular de la Cuenta' },
    ],
  },
  {
    id: 'seo',
    label: '🔍 SEO',
    fields: [
      { key: 'seo_title', label: 'Título SEO (meta title)' },
      { key: 'seo_description', label: 'Descripción SEO (meta description)', textarea: true },
      { key: 'seo_keywords', label: 'Palabras Clave (separadas por comas)' },
      { key: 'og_image', label: 'Imagen Open Graph (URL)', hint: 'Imagen que se muestra al compartir en redes' },
    ],
  },
  {
    id: 'legal',
    label: '⚖️ Legal',
    fields: [
      { key: 'privacy_policy', label: 'Política de Privacidad', textarea: true, tall: true },
      { key: 'legal_notice', label: 'Aviso Legal', textarea: true, tall: true },
      { key: 'cookies_policy', label: 'Política de Cookies', textarea: true, tall: true },
      { key: 'return_policy', label: 'Política de Devoluciones', textarea: true, tall: true },
    ],
  },
];

export default function AdminConfig() {
  const [config, setConfig] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState(CONFIG_SCHEMA[0].id);
  const [savedMsg, setSavedMsg] = useState('');

  useEffect(() => {
    fetch('/api/admin/config')
      .then(res => res.json())
      .then(data => { setConfig(data); setLoading(false); });
  }, []);

  async function handleSave() {
    setSaving(true);
    const res = await fetch('/api/admin/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });
    setSaving(false);
    if (res.ok) {
      setSavedMsg('✓ Guardado correctamente');
      setTimeout(() => setSavedMsg(''), 3000);
    }
  }

  const handleChange = (key: string, value: string) => {
    setConfig((prev: any) => ({ ...prev, [key]: value }));
  };

  if (loading) return (
    <div style={{ color: 'var(--text-muted)', padding: '5rem', textAlign: 'center', fontFamily: 'var(--font-ui)', letterSpacing: '0.2em' }}>
      CARGANDO CONFIGURACIÓN...
    </div>
  );

  const activeTab = CONFIG_SCHEMA.find(s => s.id === tab)!;

  return (
    <div style={{ maxWidth: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>✦ Administración</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>Configuración del Sitio</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {savedMsg && <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: '#4a8', letterSpacing: '0.05em' }}>{savedMsg}</span>}
          <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '0.85rem 2.5rem', letterSpacing: '0.15em' }}>
            {saving ? 'GUARDANDO...' : 'GUARDAR TODO'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2.5rem', alignItems: 'start' }}>

        {/* LEFT: Tab list */}
        <div style={{ background: '#080808', border: '1px solid #1a1a1a', padding: '0.5rem 0' }}>
          {CONFIG_SCHEMA.map(section => (
            <button
              key={section.id}
              onClick={() => setTab(section.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '0.85rem 1.5rem',
                background: tab === section.id ? 'rgba(255,255,255,0.04)' : 'none',
                borderLeft: `3px solid ${tab === section.id ? 'var(--accent)' : 'transparent'}`,
                border: 'none',
                borderLeftWidth: '3px',
                borderLeftStyle: 'solid',
                borderLeftColor: tab === section.id ? 'var(--accent)' : 'transparent',
                color: tab === section.id ? 'white' : '#555',
                cursor: 'pointer',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                letterSpacing: '0.04em',
                transition: 'all 0.2s',
              }}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* RIGHT: Fields */}
        <div style={{ background: '#080808', border: '1px solid #1a1a1a', padding: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
            {activeTab.label}
          </h2>
          <div style={{ borderBottom: '1px solid #1a1a1a', marginBottom: '2.5rem' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {activeTab.fields.map(field => (
              <ConfigField
                key={field.key}
                field={field}
                value={config[field.key]}
                onChange={handleChange}
              />
            ))}
          </div>

          {/* Save button also at bottom */}
          <div style={{ marginTop: '3rem', borderTop: '1px solid #1a1a1a', paddingTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem', alignItems: 'center' }}>
            {savedMsg && <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', color: '#4a8' }}>{savedMsg}</span>}
            <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '0.85rem 2.5rem' }}>
              {saving ? 'GUARDANDO...' : 'GUARDAR CAMBIOS'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfigField({ field, value, onChange }: { field: any; value: string; onChange: (k: string, v: string) => void }) {
  const S = {
    label: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontSize: '0.62rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase' as const,
      color: '#666',
      marginBottom: '0.4rem',
    },
    hint: {
      fontFamily: 'var(--font-ui)',
      fontSize: '0.65rem',
      color: '#3a3a3a',
      marginTop: '0.3rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 0.9rem',
      background: '#050505',
      border: '1px solid #1a1a1a',
      color: 'white',
      fontFamily: 'var(--font-body)',
      fontSize: '0.95rem',
      outline: 'none',
      boxSizing: 'border-box' as const,
    },
  };

  return (
    <div>
      <label style={S.label}>{field.label}</label>

      {field.type === 'color' ? (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input
            type="color"
            value={value || '#000000'}
            onChange={e => onChange(field.key, e.target.value)}
            style={{ width: '60px', height: '44px', border: '1px solid #1a1a1a', background: 'none', cursor: 'pointer', padding: '2px' }}
          />
          <input
            type="text"
            value={value || ''}
            onChange={e => onChange(field.key, e.target.value)}
            placeholder="#000000"
            style={{ ...S.input, flex: 1 }}
          />
          {value && (
            <div style={{ width: '44px', height: '44px', background: value, border: '1px solid #333', flexShrink: 0 }} />
          )}
        </div>
      ) : field.type === 'select' ? (
        <select
          value={value || field.options[0]}
          onChange={e => onChange(field.key, e.target.value)}
          style={S.input}
        >
          {field.options.map((opt: string) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      ) : field.textarea ? (
        <textarea
          value={value || ''}
          onChange={e => onChange(field.key, e.target.value)}
          rows={field.tall ? 12 : 5}
          style={{ ...S.input, resize: 'vertical', lineHeight: 1.6 }}
        />
      ) : (
        <input
          type="text"
          value={value || ''}
          onChange={e => onChange(field.key, e.target.value)}
          style={S.input}
          placeholder={field.hint}
        />
      )}

      {field.hint && field.type !== 'color' && (
        <p style={S.hint}>{field.hint}</p>
      )}
    </div>
  );
}
