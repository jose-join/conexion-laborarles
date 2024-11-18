import React, { useState } from "react";
import ActiveBeneficiaries from "../components/ActiveBeneficiaries";

const Beneficiarios = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState(null);

  // Lista ficticia de beneficiarios activos
  const beneficiaries = [
    { id: 1, name: "Juan Perez", sector: "Agricultura" },
    { id: 2, name: "Maria Lopez", sector: "Construcción" },
    { id: 3, name: "Carlos Sánchez", sector: "Comercio" },
  ];

  const handleSearch = () => {
    const found = beneficiaries.find((beneficiary) =>
      beneficiary.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResult(found);
  };

  return (
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

      <h3 className="text-xl font-semibold mt-8 mb-2 text-center">Buscar Beneficiario</h3>
      <p className="mb-4 text-center">
        Ingresa el nombre de un beneficiario para verificar si está registrado en nuestra base de datos.
      </p>

      {/* Buscador de beneficiarios */}
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por nombre"
          className="border p-2 rounded-md w-full max-w-md mb-4 text-center"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full max-w-md"
        >
          Buscar
        </button>
      </div>

      {/* Resultado de la búsqueda */}
      {result ? (
        <div className="mt-4 p-4 border rounded-md bg-green-100 text-green-800 text-center max-w-md mx-auto">
          <h4 className="font-semibold">Beneficiario Encontrado:</h4>
          <p>Nombre: {result.name}</p>
          <p>Sector: {result.sector}</p>
        </div>
      ) : searchQuery !== "" ? (
        <div className="mt-4 p-4 border rounded-md bg-red-100 text-red-800 text-center max-w-md mx-auto">
          <p>No se encontró ningún beneficiario con ese nombre.</p>
        </div>
      ) : null}
    </div>
  );
};

export default Beneficiarios;
