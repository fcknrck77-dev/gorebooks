import PolicyLayout from '../../components/PolicyLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | Gore Books',
};

export default function AvisoLegal() {
  return (
    <PolicyLayout title="Aviso Legal">
      <h2>1. Datos Identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos identificativos:
      </p>
      <ul>
        <li><strong>Titular:</strong> Jesús Fernández Rodríguez</li>
        <li><strong>Web:</strong> gorebooks.es</li>
        <li><strong>Correo de contacto:</strong> info@gorebooks.es</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente Aviso Legal regula el acceso y uso del sitio web gorebooks.es, así como la responsabilidad de
        los usuarios derivada de dicho uso. El acceso al sitio web atribuye la condición de "usuario" e implica la
        aceptación de estas condiciones.
      </p>

      <h2>3. Propiedad Intelectual e Industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, imágenes, marcas, logotipos, diseño, código fuente) son
        propiedad de Jesús Fernández Rodríguez o de terceros que han autorizado su uso. Queda prohibida su
        reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito
        del titular.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños o perjuicios que pudieran derivarse del uso o de la
        imposibilidad de uso de la web, ni de la veracidad o actualización de los contenidos publicados por
        terceros.
      </p>

      <h2>5. Legislación Aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española vigente. Para la resolución de cualquier conflicto
        derivado del uso del sitio web, el usuario y el titular se someten, con renuncia expresa a cualquier otro
        fuero, a los juzgados y tribunales de España.
      </p>
    </PolicyLayout>
  );
}
