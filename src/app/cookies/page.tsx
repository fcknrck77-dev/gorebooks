import PolicyLayout from '../../components/PolicyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Gore Books',
};

export default function Cookies() {
  return (
    <PolicyLayout title="Política de Cookies">
      <h2>1. ¿Qué son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
        web. Sirven para recordar tus preferencias, mejorar la experiencia de navegación y, en algunos casos,
        mostrarte publicidad relevante.
      </p>

      <h2>2. Cookies que Utilizamos</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.95rem',
        marginTop: '1rem',
      }}>
        <thead>
          <tr>
            {['Tipo', 'Nombre', 'Finalidad', 'Duración'].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: '0.6rem 0.8rem', borderBottom: '1px solid #333', color: '#c9a84c' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['Técnica', '_session', 'Mantener la sesión del usuario', 'Sesión'],
            ['Analítica', '_ga', 'Google Analytics — análisis de tráfico anónimo', '2 años'],
            ['Preferencia', 'cookie_consent', 'Recordar tu elección sobre cookies', '1 año'],
          ].map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #1e1e1e' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '0.6rem 0.8rem', color: '#a09888' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>3. Tipos de Cookies por Finalidad</h2>
      <ul>
        <li><strong>Cookies técnicas:</strong> imprescindibles para el funcionamiento del sitio web.</li>
        <li><strong>Cookies analíticas:</strong> nos permiten conocer cómo los usuarios navegan por la web para mejorarla.</li>
        <li><strong>Cookies de preferencias:</strong> recuerdan tus opciones y configuraciones.</li>
      </ul>

      <h2>4. Gestión y Desactivación</h2>
      <p>
        Puedes configurar, bloquear o eliminar las cookies desde la configuración de tu navegador. Ten en cuenta
        que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio. Instrucciones para los
        principales navegadores:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a84c' }}>Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a84c' }}>Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a84c' }}>Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a84c' }}>Microsoft Edge</a></li>
      </ul>

      <h2>5. Más Información</h2>
      <p>
        Para más información sobre el uso de tus datos, consulta nuestra{' '}
        <a href="/privacidad" style={{ color: '#c9a84c' }}>Política de Privacidad</a>.
      </p>
    </PolicyLayout>
  );
}
