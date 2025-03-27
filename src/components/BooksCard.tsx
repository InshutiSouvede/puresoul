interface BooksCardProps {
  image: string;
  title: string;
  author: string;
  description: string;
}
export default function BooksCard({
  image,
  title,
  author,
  description,
}: BooksCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex items-center p-4 transform transition hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-24 h-36 object-cover mr-4 rounded-md"
      />
      <div>
        <h3 className="font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">by {author}</p>
        <p className="text-gray-500 text-xs mt-1">{description}</p>
      </div>
    </div>
  );
}
