'use client';

import { useState, useEffect } from 'react';

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  useEffect(() => {
    fetch('/api/admin/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando pedidos...</div>;

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '2rem' }}>Gestión de Pedidos</h2>

      <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '4px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ color: '#555', fontSize: '0.7rem', textTransform: 'uppercase', background: '#0d0d0d', borderBottom: '1px solid #1a1a1a' }}>
              <th style={{ padding: '1.2rem 2rem' }}>Pedido</th>
              <th>Cliente</th>
              <th>Libro</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #111', fontSize: '0.9rem' }}>
                <td style={{ padding: '1.2rem 2rem', color: 'var(--accent-gold)', fontWeight: 600 }}>#{order.id}</td>
                <td>{order.full_name}</td>
                <td>{order.book_title} <small style={{ color: '#555' }}>({order.format})</small></td>
                <td>{order.total_price} €</td>
                <td>
                  <select 
                    value={order.status} 
                    style={{ background: '#111', color: 'white', border: '1px solid #222', padding: '0.2rem', fontSize: '0.75rem' }}
                    onChange={() => { /* Implementar update status */ }}
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="pagado">Pagado</option>
                    <option value="enviado">Enviado</option>
                    <option value="entregado">Entregado</option>
                  </select>
                </td>
                <td style={{ color: '#555', fontSize: '0.8rem' }}>{new Date(order.created_at).toLocaleDateString()}</td>
                <td>
                  <button 
                    onClick={() => setSelectedOrder(order)}
                    style={{ background: 'var(--accent)', color: 'white', border: 'none', padding: '0.4rem 0.8rem', fontSize: '0.7rem', cursor: 'pointer', borderRadius: '2px' }}
                  >
                    VER DETALLES
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de Detalles */}
      {selectedOrder && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'grid', placeItems: 'center', zIndex: 1000 }}>
          <div style={{ background: '#0a0a0a', border: '1px solid #222', padding: '3rem', maxWidth: '600px', width: '90%', borderRadius: '8px', position: 'relative' }}>
            <button 
              onClick={() => setSelectedOrder(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: '1.5rem' }}
            >
              ×
            </button>
            
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--accent-gold)' }}>
              Detalles del Pedido #{selectedOrder.id}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '0.65rem', color: '#555', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Información del Cliente</h4>
                <p style={{ marginBottom: '0.25rem' }}><strong>{selectedOrder.full_name}</strong></p>
                <p style={{ fontSize: '0.85rem', color: '#aaa' }}>{selectedOrder.email}</p>
                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '0.5rem' }}>📱 Tel: {selectedOrder.phone}</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.65rem', color: '#555', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Dirección de Envío</h4>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {selectedOrder.address}<br />
                  {selectedOrder.portal && `Portal: ${selectedOrder.portal}, `} 
                  {selectedOrder.piso && `Piso: ${selectedOrder.piso}, `} 
                  {selectedOrder.puerta && `Puerta: ${selectedOrder.puerta}`} <br />
                  {selectedOrder.zip} {selectedOrder.city}<br />
                  {selectedOrder.province}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#0d0d0d', border: '1px solid #1a1a1a' }}>
              <h4 style={{ fontSize: '0.65rem', color: '#555', textTransform: 'uppercase', marginBottom: '1rem' }}>Logística y Notas</h4>
              <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                <span style={{ color: '#888' }}>Hora de entrega:</span> {selectedOrder.delivery_time}
              </p>
              {selectedOrder.notes && (
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#aaa' }}>
                  "{selectedOrder.notes}"
                </p>
              )}
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
               <button onClick={() => setSelectedOrder(null)} className="btn-ghost" style={{ padding: '0.8rem 1.5rem' }}>CERRAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
