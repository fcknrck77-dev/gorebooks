'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/books';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchProducts() {
    const res = await fetch('/api/admin/books');
    if (res.status === 401) { router.push('/admin'); return; }
    setProducts(await res.json());
    setLoading(false);
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`¿Eliminar "${title}"? Esta acción no se puede deshacer.`)) return;
    await fetch('/api/admin/books', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  }

  useEffect(() => { fetchProducts(); }, []); // eslint-disable-line

  const label = (txt: string) => (
    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{txt}</span>
  );

  const badge = (text: string, color: string) => (
    <span style={{ background: color, color: 'white', fontFamily: 'var(--font-ui)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.15rem 0.5rem', borderRadius: '2px' }}>{text}</span>
  );

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
            ✦ Administración
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300 }}>Catálogo de Productos</h1>
        </div>
        <Link
          href="/admin/libros/nuevo"
          className="btn-primary"
          style={{ fontSize: '0.65rem', letterSpacing: '0.15em', border: 'none' }}
        >
          + AÑADIR PRODUCTO
        </Link>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Cargando catálogo...</p>
      ) : (
        <div style={{ border: '1px solid var(--border)', background: '#080808', overflowX: 'auto' }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '60px 80px 1fr 120px 80px 80px 140px', gap: '1rem', background: '#0a0a0a', borderBottom: '1px solid var(--border)', padding: '1rem', minWidth: '900px' }}>
            {['Imagen', 'Tipo', 'Nombre y Descripción', 'Categoría', 'Precio', 'Stock', 'Acciones'].map(h => (
              <div key={h}>{label(h)}</div>
            ))}
          </div>

          {/* Rows */}
          {products.map((product, i) => (
            <div
              key={product.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 80px 1fr 120px 80px 80px 140px',
                gap: '1rem',
                padding: '1rem',
                borderBottom: i < products.length - 1 ? '1px solid var(--border)' : 'none',
                alignItems: 'center',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
              }}
            >
              {/* Image thumb */}
              <div>
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.image} alt={product.title} style={{ width: '40px', height: '56px', objectFit: 'cover', border: '1px solid var(--border)' }} />
                ) : (
                  <div style={{ width: '40px', height: '56px', background: '#1a1a1a', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', fontSize: '0.8rem' }}>?</div>
                )}
              </div>

              {/* Type */}
              <div>
                {product.type === 'book' ? badge('Libro', '#222') : badge('Merch', '#444')}
              </div>

              {/* Title */}
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: '0.2rem' }}>{product.title}</p>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {product.is_featured && badge('Destacado', '#4a0000')}
                  {product.is_upcoming && badge('Próximo', '#555')}
                  <span style={{ fontSize: '0.65rem', color: '#444' }}>{product.slug}</span>
                </div>
              </div>

              {/* Category */}
              <div>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  {product.category || '—'}
                </p>
              </div>

              {/* Price */}
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: product.original_price ? 'var(--accent-gold)' : 'white' }}>
                  {product.price}€
                </p>
                {product.original_price && <s style={{ fontSize: '0.6rem', color: '#555' }}>{product.original_price}€</s>}
              </div>

              {/* Stock */}
              <div>
                <span style={{ 
                  fontFamily: 'var(--font-ui)', 
                  fontSize: '0.8rem', 
                  color: product.stock === 0 ? 'var(--accent)' : product.stock < 5 ? '#f60' : '#4a8',
                  fontWeight: 600
                }}>
                  {product.stock === 0 ? 'AGOTADO' : product.stock}
                </span>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link
                  href={`/admin/libros/${product.id}`}
                  style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '0.4rem 0.8rem', border: '1px solid var(--border)', color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  EDITAR
                </Link>
                <button
                  onClick={() => handleDelete(product.id, product.title)}
                  style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '0.4rem 0.8rem', border: '1px solid #330000', color: '#822', background: 'none', cursor: 'pointer' }}
                >
                  BORRAR
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
