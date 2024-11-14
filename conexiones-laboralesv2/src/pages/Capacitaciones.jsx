import React from "react";
import CapacitacionForm from "../components/CapacitacionForm";
import AvailableWorkshops from "../components/AvailableWorkshops";

const Capacitaciones = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Capacitaciones</h2>
    <p className="mb-4">
      En esta sección, puedes explorar y gestionar los talleres y capacitaciones que ofrecemos para mejorar la empleabilidad de los trabajadores. Estas capacitaciones están diseñadas para desarrollar habilidades técnicas y blandas que son altamente valoradas en el mercado laboral actual.
    </p>

    <h3 className="text-xl font-semibold mb-2">¿Por qué son importantes las Capacitaciones?</h3>
    <p className="mb-4">
      Las capacitaciones proporcionan a los trabajadores las herramientas necesarias para destacarse en sus empleos actuales y futuros. Al adquirir nuevas habilidades, pueden mejorar sus oportunidades laborales y adaptarse mejor a las necesidades cambiantes de los empleadores. Además, ofrecemos talleres en habilidades blandas como comunicación, trabajo en equipo y resolución de problemas, que son fundamentales para cualquier sector.
    </p>

    {/* Sección para mostrar capacitaciones disponibles */}
    <AvailableWorkshops />

    <h3 className="text-xl font-semibold mt-8 mb-2">Agregar Nueva Capacitación</h3>
    <p className="mb-4">
      Utiliza el formulario a continuación para agregar nuevas capacitaciones a la plataforma. Puedes especificar el título y la descripción de cada capacitación para ayudar a los trabajadores a identificar las habilidades que podrán adquirir.
    </p>

    {/* Formulario para agregar capacitaciones */}
    <CapacitacionForm />
  </div>
);

export default Capacitaciones;
