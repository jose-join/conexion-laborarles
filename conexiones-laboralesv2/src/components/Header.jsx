import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar información del usuario desde Local Storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    // Cerrar sesión
    localStorage.removeItem("user");
    setLoggedInUser(null);
    alert("Sesión cerrada exitosamente.");
    navigate("/"); // Redirigir a la página principal
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Conexiones Laborales</h1>
          <p className="text-sm">Facilitando la Inserción de Trabajadores y Empleadores</p>
        </div>
        <div className="flex items-center gap-4">
          {loggedInUser ? (
            <div className="flex items-center gap-2">
              <FaUserCircle size={30} />
              <span className="font-semibold">{loggedInUser.username}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100"
              >
                Registrarse
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
