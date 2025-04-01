import Slider from "./UI/Slider";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-900 text-white">
      {/* Background principal image */}
      <div className="absolute inset-0">
        <Slider></Slider>
      </div>

      {/* Content up to image */}
      <div className="relative z-10 flex justify-center items-center h-full text-center p-4">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-red-600 drop-shadow-lg">
            Benji Gómez - Entrenador Personal
          </h1>
          <p className="text-lg font-bold sm:text-2xl max-w-3xl mx-auto text-white">
            Entrenamiento a tu medida para alcanzar tus metas.
          </p>
          <p>
            Tu progreso, mi compromiso. Entrenamientos hechos a medida para
            ayudarte a lograr tus metas, con seguimiento continuo.
          </p>
          <a
            href="https://www.instagram.com/benjigomezpro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white text-lg py-2 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-black hover:scale-105"
          >
            Sígueme en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
