interface ExpertCardProps {
  image: string;
  name: string;
  specialty: string;
  expertise: string;
}

export default function ExpertsCard({
  image,
  name,
  specialty,
  expertise,
}: ExpertCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{specialty}</p>
        <p className="text-gray-500 text-xs mt-1">{expertise}</p>
      </div>
    </div>
  );
}
