// src/components/AvailableWorkshops.jsx
import React, { useState } from "react";

const AvailableWorkshops = () => {
  // Datos de ejemplo de capacitaciones
  const workshops = [
    {
      id: 1,
      title: "Capacitación en Habilidades Digitales",
      description: "Aprende el uso de herramientas digitales esenciales para el trabajo.",
      details: "Este taller incluye temas como el uso de software de oficina, herramientas de comunicación digital y manejo de redes sociales para el ámbito laboral.",
    },
    {
      id: 2,
      title: "Taller de Comunicación Efectiva",
      description: "Desarrolla habilidades de comunicación para mejorar el trabajo en equipo.",
      details: "Aprenderás técnicas de comunicación verbal y no verbal, escucha activa, y estrategias para mejorar la colaboración en el equipo de trabajo.",
    },
    {
      id: 3,
      title: "Capacitación en Seguridad Industrial",
      description: "Aprende las mejores prácticas de seguridad en el lugar de trabajo.",
      details: "Incluye temas de primeros auxilios, identificación de riesgos, y procedimientos para mantener un ambiente seguro.",
    },
  ];

  // Estado para manejar qué taller está seleccionado para ver detalles
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  // Función para manejar la visualización de detalles
  const toggleDetails = (id) => {
    setSelectedWorkshop(selectedWorkshop === id ? null : id);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Capacitaciones Disponibles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="border rounded-lg shadow-md p-4 bg-white">
            <h4 className="text-lg font-semibold mb-2">{workshop.title}</h4>
            <p className="text-gray-600">{workshop.description}</p>
            <button
              onClick={() => toggleDetails(workshop.id)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              {selectedWorkshop === workshop.id ? "Ocultar Detalles" : "Ver Detalles"}
            </button>

            {/* Mostrar detalles y opción de registro si el taller está seleccionado */}
            {selectedWorkshop === workshop.id && (
              <div className="mt-4 text-gray-700">
                <p className="mb-4">{workshop.details}</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                  Registrarse
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableWorkshops;
