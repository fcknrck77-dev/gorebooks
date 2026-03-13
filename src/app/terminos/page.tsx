import PolicyLayout from '../../components/PolicyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Gore Books',
};

export default function Terminos() {
  return (
    <PolicyLayout title="Términos y Condiciones">
      <h2>1. Aceptación</h2>
      <p>
        El acceso y uso de este sitio web implica la aceptación plena y sin reservas de los presentes Términos
        y Condiciones. Si no estás de acuerdo con ellos, te rogamos que abandones el sitio web.
      </p>

      <h2>2. Descripción del Servicio</h2>
      <p>
        Gore Books es una tienda online de novelas de terror, horror y thriller psicológico del autor Jesús
        Fernández Rodríguez. Ofrecemos libros en formato digital (Kindle/ebook), tapa blanda y tapa dura, así
        como packs y merchandising relacionados.
      </p>

      <h2>3. Proceso de Compra</h2>
      <p>Los pasos para realizar una compra son los siguientes:</p>
      <ol>
        <li>Selección del título y formato deseado.</li>
        <li>Redirección a la plataforma de pago o a Amazon.</li>
        <li>Confirmación del pedido por correo electrónico.</li>
        <li>Entrega: los ebooks se entregan digitalmente de inmediato; los libros físicos en los plazos indicados en el punto 5.</li>
      </ol>

      <h2>4. Precios y Métodos de Pago</h2>
      <p>
        Todos los precios indicados en el sitio web incluyen el IVA aplicable vigente en España. Nos reservamos
        el derecho a modificar los precios en cualquier momento, pero los cambios no afectarán a los pedidos
        ya confirmados.
      </p>
      <p>Los métodos de pago aceptados son:</p>
      <ul>
        <li><strong>Bizum:</strong> envía el importe al número indicado durante el proceso de compra, incluyendo la referencia de tu pedido en el concepto.</li>
        <li><strong>Transferencia bancaria:</strong> realiza la transferencia al IBAN facilitado durante el proceso de compra, indicando la referencia de tu pedido en el concepto.</li>
      </ul>
      <p>
        El pedido se activará y procesará una vez se confirme la recepción del pago. Para ebooks, la entrega
        se realizará por correo electrónico una vez validado el pago.
      </p>

      <h2>5. Plazos de Entrega (Libros Físicos)</h2>
      <ul>
        <li><strong>España peninsular:</strong> 3-7 días hábiles.</li>
        <li><strong>Islas Baleares y Canarias:</strong> 5-10 días hábiles.</li>
        <li><strong>Resto de Europa:</strong> 7-14 días hábiles.</li>
        <li><strong>Internacional:</strong> consultar.</li>
      </ul>
      <p>
        Los plazos son orientativos y pueden variar por causas ajenas a nuestra voluntad (huelgas, retrasos
        de mensajería, etc.).
      </p>

      <h2>6. Disponibilidad</h2>
      <p>
        Nos esforzamos por mantener actualizado el stock. En caso de que un producto no estuviese disponible
        tras la confirmación del pedido, el usuario será notificado y podrá elegir entre un producto alternativo,
        esperar a la reposición o solicitar el reembolso íntegro.
      </p>

      <h2>7. Menores de Edad</h2>
      <p>
        Los contenidos de Gore Books están dirigidos a mayores de 18 años. Al realizar una compra o registrarse,
        el usuario confirma ser mayor de edad.
      </p>

      <h2>8. Legislación Aplicable</h2>
      <p>
        Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se
        someten a los juzgados y tribunales de España.
      </p>
    </PolicyLayout>
  );
}
