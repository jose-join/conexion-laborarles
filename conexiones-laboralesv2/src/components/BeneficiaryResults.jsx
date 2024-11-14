// src/components/BeneficiaryResults.jsx
import React from "react";

const BeneficiaryResults = () => {
  // Datos de ejemplo de los beneficiarios
  const beneficiaries = [
    { id: 1, name: "Juan Pérez", sector: "Agricultura", satisfaction: "Muy Satisfecho", employed: "Sí" },
    { id: 2, name: "Ana Torres", sector: "Construcción", satisfaction: "Satisfecho", employed: "No" },
    { id: 3, name: "Luis Rojas", sector: "Comercio", satisfaction: "Neutral", employed: "Sí" },
    { id: 4, name: "María Ramírez", sector: "Servicios", satisfaction: "Muy Satisfecho", employed: "Sí" },
    // Agrega más beneficiarios según sea necesario
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Resultados de los Beneficiarios</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Sector</th>
            <th className="py-2 px-4 border-b">Nivel de Satisfacción</th>
            <th className="py-2 px-4 border-b">Empleo Obtenido</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((beneficiary) => (
            <tr key={beneficiary.id}>
              <td className="py-2 px-4 border-b text-center">{beneficiary.name}</td>
              <td className="py-2 px-4 border-b text-center">{beneficiary.sector}</td>
              <td className="py-2 px-4 border-b text-center">{beneficiary.satisfaction}</td>
              <td className="py-2 px-4 border-b text-center">{beneficiary.employed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeneficiaryResults;
