const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Contacto</h2>
        <p className="text-lg mb-8">
          ¿Tienes alguna pregunta o quieres empezar tu entrenamiento
          personalizado? ¡Contáctame!
        </p>

        <form
          action="https://formspree.io/f/mqkqzqzz"
          method="POST"
          className="max-w-lg mx-auto space-y-4"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Tu Mensaje"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-black transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
