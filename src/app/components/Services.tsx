const Services = () => {
    return (
      <section id="services" className="py-16 bg-white text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-black mb-4">Entrenamiento Personalizado</h3>
              <p className="text-lg">
                Planes de entrenamiento adaptados a tus objetivos específicos, ya sea perder peso, ganar masa
                muscular o mejorar tu salud general.
              </p>
            </div>
  
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-black mb-4">Asesoramiento Nutricional</h3>
              <p className="text-lg">
                Diseña tu plan nutricional con base en tus necesidades y estilo de vida. Te ayudo a lograr una
                alimentación balanceada que potencie tus resultados.
              </p>
            </div>
  
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-black mb-4">Entrenamientos Online</h3>
              <p className="text-lg">
                Si prefieres entrenar desde casa o en cualquier lugar, puedo ofrecerte entrenamientos online
                personalizados que te guiarán paso a paso.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  