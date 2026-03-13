'use client';

import { useState, useEffect } from 'react';

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [userOrders, setUserOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    fetch('/api/admin/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  async function handleViewProfile(user: any) {
    setSelectedUser(user);
    setLoadingOrders(true);
    try {
      const res = await fetch(`/api/admin/orders?userId=${user.id}`);
      const data = await res.json();
      setUserOrders(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingOrders(false);
    }
  }

  if (loading) return <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '5rem' }}>CARGANDO USUARIOS...</div>;

  return (
    <div style={{ maxWidth: selectedUser ? '100%' : '1000px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}>Gestión de Clientes</h2>
        {selectedUser && (
          <button onClick={() => setSelectedUser(null)} style={{ background: 'none', border: '1px solid #333', color: 'white', padding: '0.5rem 1rem', cursor: 'pointer' }}>← VOLVER A LA LISTA</button>
        )}
      </div>

      {!selectedUser ? (
        <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '4px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ color: '#555', fontSize: '0.65rem', textTransform: 'uppercase', background: '#0d0d0d', borderBottom: '1px solid #1a1a1a', letterSpacing: '0.15em' }}>
                <th style={{ padding: '1.2rem 2rem' }}>Email del Cliente</th>
                <th>Fecha Registro</th>
                <th>Total Pedidos</th>
                <th style={{ textAlign: 'right', paddingRight: '2rem' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #111', fontSize: '0.9rem', transition: 'background 0.3s' }}>
                  <td style={{ padding: '1.2rem 2rem', fontWeight: 600 }}>{user.email}</td>
                  <td style={{ color: '#555' }}>{new Date(user.created_at).toLocaleDateString()}</td>
                  <td>
                    <span style={{ background: user.order_count > 0 ? 'rgba(201,168,76,0.1)' : '#111', color: user.order_count > 0 ? 'var(--accent-gold)' : '#333', padding: '0.2rem 0.6rem', borderRadius: '10px', fontSize: '0.75rem' }}>
                      {user.order_count} pedidos
                    </span>
                  </td>
                  <td style={{ textAlign: 'right', paddingRight: '2rem' }}>
                    <button 
                      onClick={() => handleViewProfile(user)}
                      style={{ background: 'none', border: '1px solid #333', color: 'white', cursor: 'pointer', fontSize: '0.7rem', padding: '0.4rem 0.8rem', letterSpacing: '0.1em' }}
                    >
                      VER PERFIL →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Perfil */}
          <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '2rem', position: 'sticky', top: '2rem' }}>
            <div style={{ width: '64px', height: '64px', background: 'var(--accent)', borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>👤</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Detalles del Cliente</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{selectedUser.email}</p>
            
            <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '1.5rem' }}>
              <p style={{ fontSize: '0.65rem', color: '#555', textTransform: 'uppercase', marginBottom: '0.5rem' }}>ID Cliente</p>
              <p style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>{selectedUser.id}</p>
              
              <p style={{ fontSize: '0.65rem', color: '#555', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Miembro desde</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>{new Date(selectedUser.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </div>

          {/* Historial de Compras */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '1.5rem' }}>Historial de Compras</h3>
            {loadingOrders ? (
              <p style={{ color: '#555' }}>Cargando historial...</p>
            ) : userOrders.length === 0 ? (
              <div style={{ padding: '3rem', border: '1px solid #1a1a1a', textAlign: 'center', color: '#555' }}>
                Este cliente aún no ha realizado ninguna compra.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {userOrders.map(order => (
                  <div key={order.id} style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', color: '#555', letterSpacing: '0.1em' }}>{new Date(order.created_at).toLocaleDateString()}</span>
                        <span style={{ background: order.status === 'pending' ? 'rgba(255,100,0,0.1)' : 'rgba(0,255,100,0.1)', color: order.status === 'pending' ? '#f60' : '#0f6', padding: '0.2rem 0.5rem', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{order.status}</span>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{order.book_title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Formato: {order.format} | Entrega a: {order.city}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--accent-gold)' }}>{order.price} €</p>
                      <p style={{ fontSize: '0.6rem', color: '#444' }}>ID: {order.id.split('-')[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
