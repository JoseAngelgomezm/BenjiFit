interface CardProps {
  title: string;
  options: string[];
}

const Card: React.FC<CardProps> = ({ title, options }) => {
  return (
    <div className="flex flex-col p-6 items-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2x shadow-gray-500/50">
      {/* Title */}
      <h3 className="text-2xl font-semibold text-red-600 mb-4">{title}</h3>

      {/* Plan options */}
      <ul className="text-sm text-gray-700 mb-6 p-6">
        {options.map((option, index) => (
          <li key={index} className="list-disc font-bold mb-2">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
