import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-900 text-white">
      {/* Fondo con la imagen del entrenador */}
      <div className="absolute inset-0">
        <Image
          src="/images/entrenador.jpg" // Cambia la ruta a la imagen real
          alt="Entrenador Personal"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Contenido encima de la imagen */}
      <div className="relative z-10 flex justify-center items-center h-full text-center p-4">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-red-600 drop-shadow-lg">
            Benji Gómez - Entrenador Personal
          </h1>
          <p className="text-lg sm:text-2xl max-w-3xl mx-auto text-white opacity-80">
            Transformación física y mental a tu alcance. ¡Alcanza tus objetivos con la mejor guía!
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
