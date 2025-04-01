const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Testimonios</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg max-w-xs mx-auto">
            <p className="text-lg italic text-gray-600 mb-4">
              Gracias a Benji, he transformado mi cuerpo y mi mentalidad. Los
              entrenamientos son efectivos y siempre me motiva a seguir
              adelante.
            </p>
            <p className="font-semibold text-black">María González</p>
            <p className="text-sm text-gray-500">Cliente satisfecha</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg max-w-xs mx-auto">
            <p className="text-lg italic text-gray-600 mb-4">
              Nunca imaginé que podría lograr tanto en tan poco tiempo. El
              enfoque personalizado y la motivación constante me han ayudado
              mucho.
            </p>
            <p className="font-semibold text-black">Carlos Pérez</p>
            <p className="text-sm text-gray-500">Cliente satisfecho</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
