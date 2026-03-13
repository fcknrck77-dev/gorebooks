import PolicyLayout from '../../components/PolicyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Gore Books',
};

export default function Privacidad() {
  return (
    <PolicyLayout title="Política de Privacidad">
      <h2>1. Responsable del Tratamiento</h2>
      <p>
        <strong>Titular:</strong> Jesús Fernández Rodríguez<br />
        <strong>Correo:</strong> info@gorebooks.es<br />
        <strong>Sitio web:</strong> gorebooks.es
      </p>

      <h2>2. Datos que Recopilamos</h2>
      <p>Podemos recopilar los siguientes datos personales cuando interactúas con nuestra web:</p>
      <ul>
        <li><strong>Formulario de contacto / newsletter:</strong> nombre y dirección de correo electrónico.</li>
        <li><strong>Compras:</strong> los datos necesarios para gestionar el pedido, procesados a través de la plataforma de pago correspondiente (Amazon o pasarela de pago).</li>
        <li><strong>Cookies y datos de navegación:</strong> IP, tipo de navegador, páginas visitadas (ver Política de Cookies).</li>
      </ul>

      <h2>3. Finalidad del Tratamiento</h2>
      <ul>
        <li>Gestionar y responder consultas y comunicaciones.</li>
        <li>Enviar la newsletter o contenidos informativos a quienes lo soliciten.</li>
        <li>Mejorar la experiencia del sitio web mediante el análisis de navegación.</li>
      </ul>

      <h2>4. Base Legal</h2>
      <p>
        El tratamiento se basa en el consentimiento del usuario (Art. 6.1.a RGPD) o en la ejecución de un
        contrato (Art. 6.1.b RGPD) según el caso.
      </p>

      <h2>5. Conservación de Datos</h2>
      <p>
        Los datos se conservarán únicamente durante el tiempo necesario para cumplir la finalidad para la
        que fueron recogidos y para atender posibles responsabilidades legales.
      </p>

      <h2>6. Destinatarios</h2>
      <p>
        No se ceden datos a terceros salvo obligación legal o cuando sea estrictamente necesario para prestar
        el servicio (p. ej., plataformas de correo electrónico o procesadores de pago). En tal caso, dichos
        terceros actúan como encargados del tratamiento bajo garantías adecuadas.
      </p>

      <h2>7. Tus Derechos</h2>
      <p>Puedes ejercer los siguientes derechos enviando un correo a <strong>info@gorebooks.es</strong>:</p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
        <li><strong>Oposición y limitación:</strong> oponerte o limitar el tratamiento.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
        <li><strong>Reclamación:</strong> ante la Agencia Española de Protección de Datos (aepd.es).</li>
      </ul>
    </PolicyLayout>
  );
}
