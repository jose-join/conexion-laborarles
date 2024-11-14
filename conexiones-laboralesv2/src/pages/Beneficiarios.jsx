import React from "react";
import BeneficiariosForm from "../components/BeneficiariosForm";
import ActiveBeneficiaries from "../components/ActiveBeneficiaries";

const Beneficiarios = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Gestión de Beneficiarios</h2>
    <p className="mb-4">
      El proyecto Conexiones Laborales está enfocado en brindar oportunidades laborales y capacitaciones a personas de bajos recursos en la región de Vinocanchon. Nuestro objetivo es ayudar a quienes enfrentan barreras económicas a acceder a empleos dignos, mejorando su calidad de vida y promoviendo el desarrollo de la comunidad.
    </p>

    <h3 className="text-xl font-semibold mb-2">¿Quiénes son los Beneficiarios?</h3>
    <p className="mb-4">
      Los beneficiarios de este proyecto son trabajadores que necesitan oportunidades de empleo y capacitación en sectores clave como agricultura, construcción, comercio y servicios en Vinocanchon. Con un enfoque en apoyar a personas de bajos ingresos, buscamos facilitar su inserción en el mercado laboral a través de una red de empleadores y capacitaciones diseñadas para mejorar sus habilidades y competencias.
    </p>

    {/* Lista de beneficiarios activos */}
    <ActiveBeneficiaries />

    <h3 className="text-xl font-semibold mt-8 mb-2">Agregar un Nuevo Beneficiario</h3>
    <p className="mb-4">
      Utiliza el formulario a continuación para registrar a nuevos beneficiarios de bajos recursos que puedan beneficiarse de nuestras oportunidades de empleo y capacitación. Este seguimiento nos ayuda a asegurar que el proyecto tenga un impacto positivo en la comunidad de Vinocanchon.
    </p>

    {/* Formulario para agregar beneficiarios */}
    <BeneficiariosForm />
  </div>
);

export default Beneficiarios;
