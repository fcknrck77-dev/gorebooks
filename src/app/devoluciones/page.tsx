import PolicyLayout from '../../components/PolicyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Devoluciones | Gore Books',
};

export default function Devoluciones() {
  return (
    <PolicyLayout title="Política de Devoluciones">
      <h2>1. Derecho de Desistimiento</h2>
      <p>
        De conformidad con el Real Decreto Legislativo 1/2007 y la Directiva Europea 2011/83/UE, el usuario
        tiene derecho a desistir del contrato en un plazo de <strong>14 días naturales</strong> desde la
        recepción del producto físico, sin necesidad de justificación.
      </p>
      <p>
        <strong>Importante:</strong> Los libros digitales (ebooks) descargados o ya accedidos <em>no son
        reembolsables</em>, salvo que sean defectuosos, de acuerdo con la excepción prevista en el Art. 103.m
        del RDL 1/2007.
      </p>

      <h2>2. Condiciones para la Devolución</h2>
      <ul>
        <li>El libro físico debe estar en su estado original, sin daños, sin abrir el precinto si lo tuviera.</li>
        <li>Debe incluir todos los accesorios y materiales originales que lo acompañen.</li>
        <li>Debes conservar el justificante de compra.</li>
      </ul>

      <h2>3. Cómo Iniciar una Devolución</h2>
      <ol>
        <li>Envía un correo a <strong>info@gorebooks.es</strong> con el asunto "DEVOLUCIÓN" e indica tu número de pedido y motivo.</li>
        <li>En un plazo de 48 horas hábiles recibirás las instrucciones de envío.</li>
        <li>Envía el producto al domicilio indicado. Los gastos de devolución corren a cargo del cliente, salvo que el producto sea defectuoso o incorrecto.</li>
        <li>Una vez recibido e inspeccionado el producto, procesaremos el reembolso en un plazo máximo de <strong>14 días</strong> mediante el mismo método de pago original.</li>
      </ol>

      <h2>4. Productos Defectuosos o Incorrectos</h2>
      <p>
        Si recibes un producto defectuoso o diferente al pedido, te cubriremos los gastos de devolución al
        completo y procederemos a enviarte el artículo correcto sin coste adicional, o a reembolsarte el
        importe íntegro según tu preferencia.
      </p>

      <h2>5. Reembolso</h2>
      <p>
        Los reembolsos se realizarán mediante la misma vía por la que se efectuó el pago original:
      </p>
      <ul>
        <li><strong>Bizum:</strong> se devolverá el importe al número de teléfono desde el que se realizó el pago.</li>
        <li><strong>Transferencia bancaria:</strong> se realizará una transferencia al IBAN del titular del pedido.</li>
      </ul>
      <p>
        El plazo de ejecución del reembolso es de un máximo de 14 días naturales desde la recepción y verificación
        del artículo devuelto.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para cualquier consulta relacionada con devoluciones, puedes contactarnos en{' '}
        <strong>info@gorebooks.es</strong>.
      </p>
    </PolicyLayout>
  );
}
