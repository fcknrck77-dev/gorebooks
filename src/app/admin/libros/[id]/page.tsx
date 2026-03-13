'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Product, BookFormat, Character, ProductVariant } from '@/lib/books';

const emptyProduct: Omit<Product, 'id' | 'created_at'> = {
  type: 'book',
  slug: '',
  title: '',
  subtitle: '',
  description: '',
  synopsis: '',
  image: '',
  back_image: '',
  price: '0,00',
  original_price: '',
  stock: 0,
  is_upcoming: false,
  is_pack: false,
  is_featured: false,
  category: 'Ficción',
  series: '',
  series_number: 0,
  formats: [{ type: 'Tapa Blanda', price: '0,00' }],
  variants: [],
  characters: [],
  amazon_url: '',
};

export default function ProductEditorPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const isNew = params.id === 'nuevo';

  const [product, setProduct] = useState<Partial<Product>>(emptyProduct);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isNew) {
      fetch(`/api/admin/books`).then(r => r.json()).then((all: Product[]) => {
        const found = all.find(p => p.id === params.id);
        if (found) setProduct(found);
        else router.push('/admin/books');
      });
    }
  }, [isNew, params.id, router]);

  function set<K extends keyof Product>(key: K, value: any) {
    setProduct(p => ({ ...p, [key]: value }));
  }

  // --- Image Upload ---
  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>, field: 'image' | 'back_image') {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(field);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) set(field, data.url);
      else alert('Error subiendo imagen');
    } catch (err) {
      alert('Error de conexión');
    } finally {
      setUploading(null);
    }
  }

  // --- Handlers for list fields ---
  function updateList(key: 'formats' | 'characters' | 'variants', i: number, field: string, value: any) {
    const list = [...(product[key] as any[])];
    list[i] = { ...list[i], [field]: value };
    set(key, list);
  }

  function addToList(key: 'formats' | 'characters' | 'variants', newItem: any) {
    set(key, [...((product as any)[key] || []), newItem]);
  }

  function removeFromList(key: 'formats' | 'characters' | 'variants', i: number) {
    set(key, (product[key] as any[]).filter((_, idx) => idx !== i));
  }

  async function handleSave() {
    setSaving(true);
    setMessage('');
    
    const res = await fetch('/api/admin/books', {
      method: isNew ? 'POST' : 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      setMessage('✓ Guardado correctamente.');
      if (isNew) router.push('/admin/books');
    } else {
      const data = await res.json();
      setMessage(`✗ Error: ${data.error || 'Error desconocido'}`);
    }
    setSaving(false);
  }

  const S = {
    section: { marginBottom: '2.5rem' } as React.CSSProperties,
    label: { display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--text-muted)', marginBottom: '0.4rem' },
    input: { width: '100%', padding: '0.7rem 0.9rem', background: '#0a0a0a', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none' } as React.CSSProperties,
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' } as React.CSSProperties,
    card: { padding: '1.25rem', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)', marginBottom: '1rem' } as React.CSSProperties,
    uploadBtn: { display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--accent)', color: 'var(--accent)', cursor: 'pointer', fontSize: '0.65rem', letterSpacing: '0.1em', marginTop: '0.5rem' } as React.CSSProperties,
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
            ✦ {isNew ? 'Nuevo Producto' : 'Edición de Producto'}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}>{product.title || 'Nombre del Producto'}</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => router.back()} style={{ background: 'none', border: '1px solid #333', color: '#888', padding: '0.75rem 1.5rem', cursor: 'pointer' }}>CANCELAR</button>
          <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ border: 'none', cursor: 'pointer', minWidth: '160px' }}>
            {saving ? 'GUARDANDO...' : 'GUARDAR CAMBIOS'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'start' }}>
        
        {/* COLUMNA IZQUIERDA: DATOS PRINCIPALES */}
        <div>
          {/* Tipo y Título */}
          <div style={S.section}>
            <div style={S.grid2}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={S.label}>Tipo de Producto</label>
                <select value={product.type} onChange={e => set('type', e.target.value)} style={S.input}>
                  <option value="book">Libro / Novela</option>
                  <option value="merch">Merchandising / Ropa</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={S.label}>Categoría</label>
                <input style={S.input} value={product.category || ''} onChange={e => set('category', e.target.value)} placeholder="Terror, Camisetas, etc." />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={S.label}>Título del Producto *</label>
              <input style={S.input} value={product.title || ''} onChange={e => set('title', e.target.value)} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={S.label}>Subtítulo / Serie</label>
              <input style={S.input} value={product.subtitle || ''} onChange={e => set('subtitle', e.target.value)} />
            </div>

            <div style={S.grid2}>
              <div>
                <label style={S.label}>Slug (URL única) *</label>
                <input style={S.input} value={product.slug || ''} onChange={e => set('slug', e.target.value)} placeholder="nombre-producto" />
              </div>
              <div>
                <label style={S.label}>Stock Disponible</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input type="number" style={S.input} value={product.stock} onChange={e => set('stock', parseInt(e.target.value))} />
                  {product.stock === 0 && <span style={{ color: 'var(--accent)', fontSize: '0.65rem', fontWeight: 600 }}>AGOTADO</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Precios y Ofertas */}
          <div style={S.section}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Precios</h2>
            <div style={S.grid2}>
              <div>
                <label style={S.label}>Precio Actual (€)</label>
                <input style={S.input} value={product.price} onChange={e => set('price', e.target.value)} placeholder="19,99" />
              </div>
              <div>
                <label style={S.label}>Precio Histórico (Oferta)</label>
                <input style={S.input} value={product.original_price || ''} onChange={e => set('original_price', e.target.value)} placeholder="Dejar vacío si no hay oferta" />
                {product.original_price && <p style={{ fontSize: '0.65rem', color: '#4a8', marginTop: '0.4rem' }}>Aparecerá como rebajado de {product.original_price}€</p>}
              </div>
            </div>
          </div>

          {/* Textos y Sinopsis */}
          <div style={S.section}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Detalles de Contenido</h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={S.label}>Descripción Corta</label>
              <textarea rows={2} style={S.input} value={product.description || ''} onChange={e => set('description', e.target.value)} />
            </div>
            {product.type === 'book' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={S.label}>Sinopsis Completa</label>
                <textarea rows={6} style={S.input} value={product.synopsis || ''} onChange={e => set('synopsis', e.target.value)} />
              </div>
            )}
            
            {product.type === 'book' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={S.label}>URL Amazon (Afiliado)</label>
                <input style={S.input} value={product.amazon_url || ''} onChange={e => set('amazon_url', e.target.value)} />
              </div>
            )}
          </div>

          {/* Dinamismo según tipo */}
          {product.type === 'book' ? (
            <div style={S.section}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>Personajes</h2>
                <button onClick={() => addToList('characters', { name: '', description: '' })} style={{ background: 'none', border: '1px solid var(--border)', color: 'white', padding: '0.4rem 0.8rem', cursor: 'pointer', fontSize: '0.7rem' }}>+ AÑADIR</button>
              </div>
              {(product.characters || []).map((c, i) => (
                <div key={i} style={S.card}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <input placeholder="Nombre del personaje" style={{ ...S.input, width: '80%' }} value={c.name} onChange={e => updateList('characters', i, 'name', e.target.value)} />
                    <button onClick={() => removeFromList('characters', i)} style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>✕</button>
                  </div>
                  <textarea placeholder="Descripción..." rows={2} style={S.input} value={c.description} onChange={e => updateList('characters', i, 'description', e.target.value)} />
                </div>
              ))}
            </div>
          ) : (
            <div style={S.section}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>Variantes (Tallas, Colores, etc.)</h2>
                <button onClick={() => addToList('variants', { name: 'Talla', options: [] })} style={{ background: 'none', border: '1px solid var(--border)', color: 'white', padding: '0.4rem 0.8rem', cursor: 'pointer', fontSize: '0.7rem' }}>+ NUEVA VARIANTE</button>
              </div>
              {(product.variants || []).map((v, i) => (
                <div key={i} style={S.card}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <input placeholder="Nombre (ej: Talla)" style={{ ...S.input, width: '30%' }} value={v.name} onChange={e => updateList('variants', i, 'name', e.target.value)} />
                    <input 
                      placeholder="Opciones separadas por coma (ej: S, M, L, XL)" 
                      style={{ ...S.input, flex: 1 }} 
                      value={(v.options || []).join(', ')} 
                      onChange={e => updateList('variants', i, 'options', e.target.value.split(',').map(o => o.trim()).filter(Boolean))} 
                    />
                    <button onClick={() => removeFromList('variants', i)} style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer' }}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA: IMÁGENES Y OPCIONES */}
        <div>
          {/* Imágenes */}
          <div style={S.section}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Imágenes</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={S.label}>Imagen Principal / Portada</label>
              <div style={{ border: '1px dashed var(--border)', padding: '1rem', textAlign: 'center' }}>
                {product.image ? (
                  <img src={product.image} alt="Vista previa" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', marginBottom: '1rem' }} />
                ) : (
                  <div style={{ height: '150px', display: 'grid', placeItems: 'center', color: '#333' }}>Sin imagen</div>
                )}
                <label style={S.uploadBtn}>
                  {uploading === 'image' ? 'SUBIENDO...' : 'CAMBIAR IMAGEN'}
                  <input type="file" hidden accept="image/*" onChange={e => handleUpload(e, 'image')} />
                </label>
                <input style={{ ...S.input, marginTop: '1rem', fontSize: '0.7rem' }} value={product.image || ''} onChange={e => set('image', e.target.value)} placeholder="O pega una URL" />
              </div>
            </div>

            {product.type === 'book' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={S.label}>Contraportada</label>
                <div style={{ border: '1px dashed var(--border)', padding: '1rem', textAlign: 'center' }}>
                  {product.back_image ? (
                    <img src={product.back_image} alt="Contraportada" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain', marginBottom: '1rem' }} />
                  ) : (
                    <p style={{ color: '#333', fontSize: '0.8rem' }}>Opcional</p>
                  )}
                  <label style={S.uploadBtn}>
                    {uploading === 'back_image' ? 'SUBIENDO...' : 'SUBIR CONTRAPORTADA'}
                    <input type="file" hidden accept="image/*" onChange={e => handleUpload(e, 'back_image')} />
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Opciones de Visibilidad */}
          <div style={S.section}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Visibilidad</h2>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', marginBottom: '1rem' }}>
              <input type="checkbox" checked={product.is_featured} onChange={e => set('is_featured', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>DESTACADO (En el Inicio / Hero)</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', marginBottom: '1rem' }}>
              <input type="checkbox" checked={product.is_upcoming} onChange={e => set('is_upcoming', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>PRÓXIMAMENTE</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', marginBottom: '1rem' }}>
              <input type="checkbox" checked={product.is_pack} onChange={e => set('is_pack', e.target.checked)} style={{ width: '20px', height: '20px', accentColor: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>ES UN PACK / COLECCIÓN</span>
            </label>
          </div>

          {message && <div style={{ padding: '1rem', background: message.includes('✓') ? 'rgba(0,255,100,0.1)' : 'rgba(255,0,0,0.1)', border: '1px solid white', marginBottom: '1rem', fontSize: '0.85rem' }}>{message}</div>}

          <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ width: '100%', height: '50px', border: 'none', cursor: 'pointer' }}>
            {saving ? 'GUARDANDO CAMBIOS...' : 'GUARDAR AHORA'}
          </button>
        </div>
      </div>
    </div>
  );
}
