import React from "react";

const Home = () => (
  <div className="p-4 text-center">
    <div className="mb-6">
      <img
        src="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/04/trabajar-desde-casa.jpg"
        alt="Conexiones Laborales"
        className="mx-auto w-1/2 h-auto rounded-lg shadow-lg"
      />
    </div>
    <h2 className="text-3xl font-bold mb-4">Bienvenido a Conexiones Laborales</h2>
    <p className="mb-6 text-lg text-gray-700">
      Conexiones Laborales es una plataforma dedicada a facilitar la conexión entre trabajadores y empleadores en el mercado de Vinocanchon. Nuestro objetivo es mejorar la empleabilidad y promover el desarrollo económico local mediante la capacitación, el acceso a oportunidades laborales y la inclusión de grupos vulnerables en el mercado laboral.
    </p>

    <h3 className="text-2xl font-semibold mb-4">¿Qué Ofrecemos?</h3>
    <ul className="list-disc text-left text-lg pl-10 mb-8 inline-block">
      <li className="mb-2">Acceso a una lista actualizada de ofertas laborales en la región de Vinocanchon.</li>
      <li className="mb-2">Capacitaciones en habilidades digitales, técnicas y blandas para mejorar la empleabilidad.</li>
      <li className="mb-2">Espacios de conexión entre empleadores y trabajadores que buscan oportunidades de empleo.</li>
      <li className="mb-2">Evaluación continua para mejorar la plataforma y adaptarnos a las necesidades de la comunidad.</li>
    </ul>

    <h3 className="text-2xl font-semibold mb-4">Objetivos de la Plataforma</h3>
    <p className="mb-6 text-lg text-gray-700">
      Nuestro objetivo principal es reducir la tasa de desempleo en la región y facilitar un mercado laboral inclusivo y dinámico. Queremos que cada trabajador tenga la oportunidad de encontrar un empleo digno y que cada empleador pueda encontrar trabajadores calificados para su negocio.
    </p>

    <h3 className="text-2xl font-semibold mb-4">¡Únete a Nosotros!</h3>
    <p className="mb-8 text-lg text-gray-700">
      Si eres un trabajador en búsqueda de oportunidades o un empleador que necesita talento local, ¡esta es tu plataforma! Explora las distintas secciones para registrarte, capacitarte y conectar con las mejores oportunidades laborales en tu región.
    </p>
  </div>
);

export default Home;
