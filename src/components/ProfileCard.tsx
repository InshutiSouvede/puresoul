import girl from '../assets/girl.jpg'
import boy from '../assets/boy.jpg'


interface ProfileCardProps {
    name: string
    email: string
    createdAt: string
    gender: string
    description?: string,
    children?: React.ReactNode
}
export default function ProfileCard({ name, email, createdAt,gender,children}: ProfileCardProps) {
  return (
    <div>
            <figure className="flex flex-row w-full gap-4 md:gap-8 border-2 border-gray-400 py-8 rounded-lg shadow-2xl justify-center">
                <img src={gender.toLowerCase()==="male"?boy:girl} className="w-24" alt="profile_image" />
                <figcaption className='flex flex-col gap-4'>
                    <h1>Name {name}</h1>
                    <p>Email {email}</p>
                    <p>Joined On { createdAt.split('T')[0]}</p>
                </figcaption>
            </figure>
            {children}
    </div>
  )
}
