import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Beneficiarios from "./pages/Beneficiarios";
import Capacitaciones from "./pages/Capacitaciones";
import Resultados from "./pages/Resultados";
import JobList from "./components/JobList";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Barra de navegación */}
        <nav className="bg-gray-200 p-4 flex justify-around">
          <Link
            to="/"
            className="text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/beneficiarios"
            className="text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Beneficiarios
          </Link>
          <Link
            to="/capacitaciones"
            className="text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Capacitaciones
          </Link>
          <Link
            to="/resultados"
            className="text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Resultados
          </Link>
          <Link
            to="/jobs"
            className="text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Trabajos
          </Link>
        </nav>

        {/* Contenido principal */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beneficiarios" element={<Beneficiarios />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
