import React, { useState } from "react";

const BeneficiariosForm = () => {
  const [beneficiario, setBeneficiario] = useState({ nombre: "", edad: "", tipo: "Trabajador" });

  const handleChange = (e) => {
    setBeneficiario({ ...beneficiario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Beneficiario agregado:", beneficiario);
    // Aquí podrías agregar lógica para enviar los datos a una API o guardarlos en el estado global
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Agregar Beneficiario</h2>
      <label className="block mb-2">
        Nombre:
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          value={beneficiario.nombre}
          className="border rounded p-2 w-full"
        />
      </label>
      <label className="block mb-2">
        Edad:
        <input
          type="number"
          name="edad"
          onChange={handleChange}
          value={beneficiario.edad}
          className="border rounded p-2 w-full"
        />
      </label>
      <label className="block mb-2">
        Tipo:
        <select
          name="tipo"
          onChange={handleChange}
          value={beneficiario.tipo}
          className="border rounded p-2 w-full"
        >
          <option value="Trabajador">Trabajador</option>
          <option value="Empleador">Empleador</option>
        </select>
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Agregar Beneficiario
      </button>
    </form>
  );
};

export default BeneficiariosForm;
