import React, { useState } from "react";

const JobList = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Vendedor de Tienda",
      description: "Responsable de ventas y atención al cliente en tienda.",
      location: "Vinocanchon",
      salary: "S/.1200 - S/.1500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75zBMKDccubRm3eBdSEFRO5j5UQ0LycLBnA&s",
    },
    {
      id: 2,
      title: "Asistente Administrativo",
      description: "Apoyo en tareas administrativas y gestión de documentos.",
      location: "Cusco",
      salary: "S/.1500 - S/.1800",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkCfl8wpjDgqRF5aQLDG115tQ5Zk44n0Ezw&s",
    },
    {
      id: 3,
      title: "Operario de Construcción",
      description: "Trabajos de construcción y mantenimiento.",
      location: "Vinocanchon",
      salary: "S/.1300 - S/.1600",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWPoA_m-hvNinWXAZbcOB9rYo9f6nCjOvpA&s",
    },
  ];

  const handleApply = (jobTitle) => {
    setSuccessMessage(`¡Te postulaste con éxito para el puesto de ${jobTitle}!`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Puestos de Trabajo</h2>

      {/* Mensaje de éxito */}
      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg shadow-lg p-4 bg-white">
            <img
              src={job.image}
              alt={job.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <p className="text-gray-800 font-semibold">Ubicación: {job.location}</p>
            <p className="text-blue-600 font-bold">Salario: {job.salary}</p>
            <button
              onClick={() => handleApply(job.title)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Postularse
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
