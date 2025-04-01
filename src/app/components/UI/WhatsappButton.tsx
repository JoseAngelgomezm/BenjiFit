const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34685750600?text=¡Hola!%20Me%20gustaría%20contactar%20contigo%20para%20más%20información."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 text-white rounded-full bg-green-500 p-4 shadow-lg hover:bg-green-600 flex items-center justify-center"
    >
      <i className="fa-brands fa-whatsapp text-4xl" />
    </a>
  );
};

export default WhatsAppButton;
