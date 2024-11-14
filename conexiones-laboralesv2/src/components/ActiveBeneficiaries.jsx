// src/components/ActiveBeneficiaries.jsx
import React from "react";

const ActiveBeneficiaries = () => {
  // Datos de ejemplo de beneficiarios activos
  const beneficiaries = [
    { id: 1, name: "Juan Pérez", age: 30, type: "Trabajador", incomeLevel: "Bajo", sector: "Agricultura" },
    { id: 2, name: "Ana Torres", age: 25, type: "Trabajador", incomeLevel: "Bajo", sector: "Comercio" },
    { id: 3, name: "Luis Rojas", age: 45, type: "Empleador", incomeLevel: "Medio", sector: "Construcción" },
    { id: 4, name: "María Ramírez", age: 38, type: "Trabajador", incomeLevel: "Bajo", sector: "Servicios" },
    // Agrega más beneficiarios según sea necesario
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Beneficiarios Activos</h3>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Edad</th>
            <th className="py-2 px-4 border-b">Tipo</th>
            <th className="py-2 px-4 border-b">Nivel de Ingreso</th>
            <th className="py-2 px-4 border-b">Sector de Interés</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((beneficiary) => (
            <tr key={beneficiary.id}>
              <td className="py-2 px-4 border-b text-center">{beneficiary.name}</td>
              <td className="py-2 px-4 border-b text-center">{beneficiary.age}</td>
              <td className="py-2 px-4 border-b text-center">{beneficiary.type}</td>
              <td className="py-2 px-4 border-b text-center">{beneficiary.incomeLevel}</td>
              <td className="py-2 px-4 border-b text-center">{beneficiary.sector}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveBeneficiaries;
