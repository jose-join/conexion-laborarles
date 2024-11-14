import React, { useState } from "react";

const Satisfaccion = () => {
  const [satisfaction, setSatisfaction] = useState("");

  const handleSatisfactionChange = (e) => {
    setSatisfaction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nivel de satisfacción:", satisfaction);
    // Aquí podrías agregar lógica para enviar los datos a una API o guardarlos en el estado global
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Evaluación de Satisfacción</h2>
      <p>Califica tu nivel de satisfacción con el uso de la plataforma:</p>
      <form onSubmit={handleSubmit}>
        <select
          value={satisfaction}
          onChange={handleSatisfactionChange}
          className="border rounded p-2 w-full mt-2"
        >
          <option value="">Selecciona una opción</option>
          <option value="Muy Satisfecho">Muy Satisfecho</option>
          <option value="Satisfecho">Satisfecho</option>
          <option value="Neutral">Neutral</option>
          <option value="Insatisfecho">Insatisfecho</option>
          <option value="Muy Insatisfecho">Muy Insatisfecho</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Enviar Evaluación
        </button>
      </form>
    </div>
  );
};

export default Satisfaccion;
