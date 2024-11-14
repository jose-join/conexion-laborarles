import React, { useState } from "react";

const CapacitacionForm = () => {
  const [capacitacion, setCapacitacion] = useState({ titulo: "", descripcion: "" });

  const handleChange = (e) => {
    setCapacitacion({ ...capacitacion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Capacitación agregada:", capacitacion);
    // Aquí podrías agregar lógica para enviar los datos a una API o guardarlos en el estado global
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Agregar Capacitación</h2>
      <label className="block mb-2">
        Título:
        <input
          type="text"
          name="titulo"
          onChange={handleChange}
          value={capacitacion.titulo}
          className="border rounded p-2 w-full"
        />
      </label>
      <label className="block mb-2">
        Descripción:
        <textarea
          name="descripcion"
          onChange={handleChange}
          value={capacitacion.descripcion}
          className="border rounded p-2 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Agregar Capacitación
      </button>
    </form>
  );
};

export default CapacitacionForm;
