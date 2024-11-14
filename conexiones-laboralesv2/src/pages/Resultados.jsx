import React from "react";
import Satisfaccion from "../components/Satisfaccion";
import BeneficiaryResults from "../components/BeneficiaryResults";

const Resultados = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Resultados del Proyecto</h2>
    <p className="mb-4">
      En esta sección, puedes revisar los resultados e informes sobre el impacto del proyecto Conexiones Laborales en el mercado laboral de Vinocanchon. Nuestro objetivo es medir el éxito de la plataforma en términos de empleabilidad, satisfacción de los beneficiarios y su impacto en la comunidad.
    </p>

    <h3 className="text-xl font-semibold mb-2">Indicadores de Impacto</h3>
    <p className="mb-4">
      A continuación, presentamos los indicadores clave que se utilizan para medir el éxito de la plataforma:
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li className="mb-2">Tasa de empleo de los beneficiarios tras utilizar la plataforma.</li>
      <li className="mb-2">Nivel de satisfacción de los beneficiarios con las capacitaciones y el acceso a empleos.</li>
      <li className="mb-2">Incremento en las habilidades técnicas y blandas de los trabajadores.</li>
      <li className="mb-2">Número de conexiones exitosas entre empleadores y trabajadores.</li>
    </ul>

    {/* Tabla con los resultados de los beneficiarios */}
    <BeneficiaryResults />

    <h3 className="text-xl font-semibold mt-8 mb-2">Evaluación de Satisfacción de los Beneficiarios</h3>
    <p className="mb-4">
      A continuación, te invitamos a completar una breve evaluación de satisfacción. Esta información es clave para mejorar la calidad de los servicios y asegurarnos de que la plataforma cumpla con las expectativas de los beneficiarios.
    </p>

    {/* Componente para la evaluación de satisfacción */}
    <Satisfaccion />
  </div>
);

export default Resultados;
