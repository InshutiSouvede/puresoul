import { Mail } from "lucide-react";

interface ExpertCardProps {
  image: string;
  name: string;
  specialty: string;
  expertise: string;
  userId: {
    _id?: string;
    email: string;
  };
}

export default function ExpertsCard({
  image,
  name,
  specialty,
  expertise,
  userId: { email },
}: ExpertCardProps) {
  function handleSendingEmail() {
    const subject = "";
    const body = "";

    const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${subject}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a popup window
    window.open(mailToLink, "_blank", "width=800,height=600");
  }
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{specialty}</p>
        <p className="text-gray-500 text-xs mt-1">{expertise}</p>
      </div>
        <button
          onClick={handleSendingEmail}
          className="text-violet-600 hover:text-violet-800 flex gap-4 p-4"
          >
          <Mail size={24} /> Connect on Email
        </button>
    </div>
  );
}
