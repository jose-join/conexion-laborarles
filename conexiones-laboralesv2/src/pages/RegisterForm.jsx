import React, { useState } from "react";

const RegisterForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Guardar datos en Local Storage
    localStorage.setItem("user", JSON.stringify(user));
    alert("¡Registro exitoso!");
    setUser({ username: "", password: "" }); // Limpiar formulario
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
      <form onSubmit={handleRegister} className="bg-gray-100 p-4 rounded shadow">
        <label className="block mb-4">
          Nombre de Usuario:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Contraseña:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
