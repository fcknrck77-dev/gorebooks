'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

// --- Datos de pago (ahora se cargan desde la DB) ---

type Step = 'datos' | 'pago' | 'confirmado';
type PaymentMethod = 'bizum' | 'transferencia';

function CheckoutContent() {
  const params = useSearchParams();
  const router = useRouter();

  const bookId = params.get('id') ?? 'unknown';
  const title = params.get('title') ?? 'Libro';
  const format = params.get('format') ?? 'Ebook';
  const price = params.get('price') ?? '0,00';

  const [step, setStep] = useState<Step>('datos');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bizum');
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [registerForm, setRegisterForm] = useState({ email: '', password: '' });
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    tipoVia: 'Calle',
    direccion: '',
    portal: '',
    piso: '',
    puerta: '',
    cp: '',
    ciudad: '',
    provincia: '',
    email: '',
    telefono: '',
    horaEntrega: 'Mañana (09:00 - 14:00)',
    notas: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [orderRef] = useState(() => 'GB-' + Math.random().toString(36).substr(2, 8).toUpperCase());
  const [config, setConfig] = useState<any>({
    bizum_number: '+34 600 000 000',
    bank_iban: 'ES00 ...',
    bank_holder: 'Jesús Fernández Rodríguez'
  });

  useEffect(() => {
    fetch('/api/config').then(r => r.json()).then(data => {
      if (!data.error) setConfig(data);
    });
  }, []);

  const isDigital = format === 'Kindle' || format === 'Ebook';

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al registrarse');
      setIsLogged(true);
      setForm(f => ({ ...f, email: registerForm.email }));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = 'Obligatorio';
    if (!form.apellidos.trim()) e.apellidos = 'Obligatorio';
    if (!form.email.includes('@')) e.email = 'Email inválido';
    if (!isDigital) {
      if (!form.direccion.trim()) e.direccion = 'Obligatorio';
      if (!form.ciudad.trim()) e.ciudad = 'Obligatorio';
      if (!form.provincia.trim()) e.provincia = 'Obligatorio';
      if (!/^\d{5}$/.test(form.cp)) e.cp = 'CP inválido';
    }
    return e;
  }

  function handleNext() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStep('pago');
  }

  async function handleConfirm() {
    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookId,
          bookTitle: title,
          format,
          price,
          fullName: `${form.nombre} ${form.apellidos}`,
          address: `${form.tipoVia} ${form.direccion}`,
          portal: form.portal,
          piso: form.piso,
          puerta: form.puerta,
          zip: form.cp,
          city: form.ciudad,
          province: form.provincia,
          phone: form.telefono,
          deliveryTime: form.horaEntrega,
          notes: form.notas
        }),
      });
      if (!res.ok) throw new Error('Error al guardar el pedido');
      setStep('confirmado');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function Field({ id, label, type = 'text', required = false }: { id: keyof typeof form; label: string; type?: string; required?: boolean }) {
    return (
      <div style={{ marginBottom: '1.25rem' }}>
        <label htmlFor={id} style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
          {label}{required && <span style={{ color: 'var(--accent)' }}> *</span>}
        </label>
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          style={{
            width: '100%',
            background: '#0a0a0a',
            border: `1px solid ${errors[id] ? 'var(--accent)' : 'var(--border)'}`,
            color: 'var(--text-primary)',
            padding: '0.75rem 1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-gold)')}
          onBlur={e => (e.currentTarget.style.borderColor = errors[id] ? 'var(--accent)' : 'var(--border)')}
        />
        {errors[id] && <p style={{ color: 'var(--accent)', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors[id]}</p>}
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border)', padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '1.4rem', letterSpacing: '0.12em' }}>
          GORE<em style={{ color: 'var(--accent)' }}>BOOKS</em>
        </Link>
        {step !== 'confirmado' && (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Datos', 'Pago'].map((s, i) => {
              const active = (i === 0 && step === 'datos') || (i === 1 && step === 'pago');
              return (
                <span key={s} style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: active ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                  {i + 1}. {s}
                </span>
              );
            })}
          </div>
        )}
      </header>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2.5rem', display: 'grid', gridTemplateColumns: step === 'confirmado' ? '1fr' : '1.3fr 1fr', gap: '4rem', alignItems: 'start' }}>

        {!isLogged && step !== 'confirmado' ? (
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>✦ Registro Obligatorio</p>
            <h1 className="display-title" style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Crea tu cuenta</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Para completar tu compra, por favor regístrate.</p>
            
            <form onSubmit={handleRegister}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>EMAIL</label>
                <input type="email" required value={registerForm.email} onChange={e => setRegisterForm({...registerForm, email: e.target.value})} style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', color: 'white', padding: '0.75rem' }} />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>CONTRASEÑA</label>
                <input type="password" required value={registerForm.password} onChange={e => setRegisterForm({...registerForm, password: e.target.value})} style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', color: 'white', padding: '0.75rem' }} />
              </div>
              {error && <p style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{error}</p>}
              <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
                {loading ? 'REGISTRANDO...' : 'REGISTRARME Y CONTINUAR'}
              </button>
            </form>
          </div>
        ) : (
          <>
            {/* ── FORMULARIO DE DATOS ── */}
            {step === 'datos' && (
              <>
                <div>
                  <p className="section-label" style={{ marginBottom: '1rem' }}>✦ Paso 1</p>
                  <h1 className="display-title" style={{ fontSize: '2.2rem', marginBottom: '2.5rem' }}>Tus Datos</h1>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <Field id="nombre" label="Nombre" required />
                    <Field id="apellidos" label="Apellidos" required />
                  </div>
                  <Field id="email" label="Correo electrónico" type="email" required />
                  <Field id="telefono" label="Teléfono" type="tel" />

                  {!isDigital && (
                    <>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-secondary)', margin: '2rem 0 1rem' }}>
                        Dirección de envío
                      </h2>
                      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
                        <div style={{ marginBottom: '1.25rem' }}>
                          <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.15em' }}>VÍA</label>
                          <select value={form.tipoVia} onChange={e => setForm({...form, tipoVia: e.target.value})} style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', color: 'white', padding: '0.75rem', height: '100%' }}>
                            <option>Calle</option>
                            <option>Avenida</option>
                            <option>Travesía</option>
                            <option>Plaza</option>
                            <option>Paseo</option>
                          </select>
                        </div>
                        <Field id="direccion" label="Nombre de la calle/vía" required />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <Field id="portal" label="Portal/Nº" />
                        <Field id="piso" label="Piso" />
                        <Field id="puerta" label="Puerta" />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <Field id="cp" label="C.P." required />
                        <Field id="ciudad" label="Ciudad" required />
                        <Field id="provincia" label="Provincia" required />
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.15em' }}>HORA DE ENTREGA</label>
                        <select value={form.horaEntrega} onChange={e => setForm({...form, horaEntrega: e.target.value})} style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', color: 'white', padding: '0.75rem' }}>
                          <option>Mañana (09:00 - 14:00)</option>
                          <option>Tarde (16:00 - 20:00)</option>
                          <option>Indiferente</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.15em' }}>NOTAS ADICIONALES</label>
                    <textarea
                      rows={3}
                      value={form.notas}
                      onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                      style={{ width: '100%', background: '#0a0a0a', border: '1px solid var(--border)', color: 'white', padding: '0.75rem', outline: 'none' }}
                    />
                  </div>

                  <button onClick={handleNext} className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
                    CONTINUAR AL PAGO →
                  </button>
                </div>
              </>
            )}

            {/* ── INSTRUCCIONES DE PAGO ── */}
            {step === 'pago' && (
              <div>
                <p className="section-label" style={{ marginBottom: '1rem' }}>✦ Paso 2</p>
                <h1 className="display-title" style={{ fontSize: '2.2rem', marginBottom: '2.5rem' }}>Método de Pago</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                  {([
                    { id: 'bizum', label: 'Bizum', icon: '📱' },
                    { id: 'transferencia', label: 'Transferencia', icon: '🏦' },
                  ] as const).map(m => (
                    <button key={m.id} onClick={() => setPaymentMethod(m.id)} style={{ padding: '1.25rem', background: paymentMethod === m.id ? 'rgba(139,0,0,0.15)' : '#0a0a0a', border: `1px solid ${paymentMethod === m.id ? 'var(--accent)' : 'var(--border)'}`, color: 'white', cursor: 'pointer', textAlign: 'left' }}>
                      <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>{m.icon}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{m.label}</span>
                    </button>
                  ))}
                </div>

                <div style={{ background: '#0a0a0a', border: '1px solid var(--border)', padding: '2rem', marginBottom: '2rem' }}>
                  {paymentMethod === 'bizum' ? (
                    <>
                      <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Instrucciones Bizum</h3>
                      <p>Envía al número: <strong>{config.bizum_number}</strong></p>
                      <p>CONCEPTO: <strong>{orderRef}</strong></p>
                    </>
                  ) : (
                    <>
                      <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Transferencia</h3>
                      <p>IBAN: <strong>{config.bank_iban}</strong></p>
                      <p>TITULAR: <strong>{config.bank_holder}</strong></p>
                      <p>CONCEPTO: <strong>{orderRef}</strong></p>
                    </>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => setStep('datos')} className="btn-ghost" style={{ border: 'none', cursor: 'pointer' }}>← VOLVER</button>
                  <button onClick={handleConfirm} disabled={loading} className="btn-primary" style={{ flex: 1, border: 'none', cursor: 'pointer' }}>
                    {loading ? 'PROCESANDO...' : '✓ CONFIRMAR PEDIDO'}
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ── CONFIRMACIÓN ── */}
        {step === 'confirmado' && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h1 className="display-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¡Gracias, {form.nombre}!</h1>
            <p>Tu pedido <strong>{orderRef}</strong> ha sido recibido.</p>
            <Link href="/" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>VOLVER AL CATÁLOGO</Link>
          </div>
        )}

        {step !== 'confirmado' && (
          <OrderSummary title={title} format={format} price={price} orderRef={orderRef} />
        )}
      </div>
    </div>
  );
}

function OrderSummary({ title, format, price, orderRef }: { title: string; format: string; price: string; orderRef: string }) {
  return (
    <div style={{ background: '#0a0a0a', border: '1px solid var(--border)', padding: '2rem', position: 'sticky', top: '2rem' }}>
      <p className="section-label" style={{ marginBottom: '1.5rem' }}>✦ Resumen del Pedido</p>
      <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: '0.4rem' }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
          Formato: {format}
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Precio</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}>{price} €</span>
      </div>
      {format !== 'Kindle' && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Envío</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--text-secondary)' }}>A calcular</span>
        </div>
      )}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>TOTAL</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--accent-gold)', fontWeight: 600 }}>{price} €</span>
      </div>
      <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          REF. DE PEDIDO
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--accent-gold)', marginTop: '0.25rem' }}>{orderRef}</p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ background: '#080808', minHeight: '100vh', display: 'grid', placeItems: 'center', color: '#888', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em' }}>CARGANDO...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
