import React, { useState } from "react";

const CapacitacionForm = () => {
  const [capacitacion, setCapacitacion] = useState({
    titulo: "",
    descripcion: "",
    imagen: null,
  });
  const [capacitaciones, setCapacitaciones] = useState([]); // Estado para almacenar capacitaciones

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCapacitacion({ ...capacitacion, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCapacitacion({ ...capacitacion, imagen: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!capacitacion.titulo || !capacitacion.descripcion || !capacitacion.imagen) {
      alert("Por favor, completa todos los campos antes de agregar la capacitación.");
      return;
    }

    // Agregar la capacitación a la lista
    setCapacitaciones([...capacitaciones, capacitacion]);

    // Limpiar el formulario
    setCapacitacion({
      titulo: "",
      descripcion: "",
      imagen: null,
    });
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto"
      >
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
        <label className="block mb-2">
          Imagen:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded p-2 w-full"
          />
        </label>
        {capacitacion.imagen && (
          <div className="mt-4">
            <p className="text-sm font-semibold">Vista Previa:</p>
            <img
              src={capacitacion.imagen}
              alt="Vista previa"
              className="rounded-lg shadow-md max-h-48"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Agregar Capacitación
        </button>
      </form>

      {/* Mostrar capacitaciones agregadas */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Capacitaciones Agregadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capacitaciones.map((cap, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <img
                src={cap.imagen}
                alt={cap.titulo}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h4 className="text-lg font-semibold mb-2">{cap.titulo}</h4>
              <p className="text-gray-600">{cap.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapacitacionForm;
