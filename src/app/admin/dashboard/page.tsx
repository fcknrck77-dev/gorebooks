'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando estadísticas...</div>;

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem' }}>Panel de Control</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '2rem', borderRadius: '4px' }}>
          <p style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Pedidos Totales</p>
          <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}>{data.stats.orders}</p>
        </div>
        <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '2rem', borderRadius: '4px' }}>
          <p style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Usuarios Registrados</p>
          <p style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--accent-gold)' }}>{data.stats.users}</p>
        </div>
      </div>

      <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '2.5rem', borderRadius: '4px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid #1a1a1a', paddingBottom: '1rem' }}>Últimos Pedidos</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ color: '#555', fontSize: '0.7rem', textTransform: 'uppercase', borderBottom: '1px solid #1a1a1a' }}>
              <th style={{ padding: '1rem 0' }}>ID</th>
              <th>Libro</th>
              <th>Importe</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {data.latestOrders.map((order: any) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #111', fontSize: '0.9rem' }}>
                <td style={{ padding: '1.2rem 0', color: 'var(--accent-gold)' }}>#{order.id}</td>
                <td>{order.book_title}</td>
                <td>{order.total_price} €</td>
                <td>
                  <span style={{ fontSize: '0.7rem', background: '#111', padding: '0.2rem 0.5rem', borderRadius: '2px', border: '1px solid #222' }}>
                    {order.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ color: '#555', fontSize: '0.8rem' }}>{new Date(order.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
