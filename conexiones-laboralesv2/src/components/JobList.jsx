import React from "react";

const JobList = () => {
  const jobs = [
    { id: 1, title: "Vendedor de Tienda", description: "Responsable de ventas y atención al cliente en tienda.", location: "Vinocanchon", salary: "S/.1200 - S/.1500" },
    { id: 2, title: "Asistente Administrativo", description: "Apoyo en tareas administrativas y gestión de documentos.", location: "Cusco", salary: "S/.1500 - S/.1800" },
    { id: 3, title: "Operario de Construcción", description: "Trabajos de construcción y mantenimiento.", location: "Vinocanchon", salary: "S/.1300 - S/.1600" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Puestos de Trabajo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg shadow-lg p-4 bg-white">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <p className="text-gray-800 font-semibold">Ubicación: {job.location}</p>
            <p className="text-blue-600 font-bold">Salario: {job.salary}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Ver Detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
