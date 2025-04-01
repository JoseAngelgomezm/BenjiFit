interface CardProps {
  title: string;
  options: string[];
}

const Card: React.FC<CardProps> = ({ title, options }) => {
  return (
    <div className="flex flex-col p-6 items-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2x shadow-gray-500/50">
      {/* Título */}
      <h3 className="text-2xl font-semibold text-red-600 mb-4">{title}</h3>

      {/* Opciones del plan */}
      <ul className="text-sm text-gray-700 mb-6 p-6">
        {options.map((option, index) => (
          <li key={index} className="list-disc font-bold mb-2">
            {option}
          </li>
        ))}
      </ul>

      <button className="px-4 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition-all">
        ¡Contratar!
      </button>
    </div>
  );
};

export default Card;
