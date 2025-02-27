import girl from '../assets/girl.jpg'
import boy from '../assets/boy.jpg'


interface ProfileCardProps {
    name: string
    email: string
    createdAt: string
    gender: string
    description?: string,
}
export default function ProfileCard({ name, email, createdAt,gender,description}: ProfileCardProps) {
  return (
    <div className='flex flex-col w-full gap-4 border-2 border-gray-400 p-8 rounded-lg shadow-2xl justify-center'>
            <figure className="flex flex-row gap-4 md:gap-8">
                <img src={gender.toLowerCase()==="male"?boy:girl} className="w-24" alt="profile_image" />
                <figcaption className='flex flex-col gap-4'>
                    <h1 className='capitalize'>Name: {name}</h1>
                    <p>Email: {email}</p>
                    <p className='capitalize'>Gender: {gender}</p>
                    <p>Joined On { createdAt.split('T')[0]}</p>
                </figcaption>
            </figure>
            <h1 className="font-semibold text-2xl">Fun Fact 💚</h1>
      <p className="italic">{description || "Haven't found mine yet 😢"}</p>
    </div>
  )
}
