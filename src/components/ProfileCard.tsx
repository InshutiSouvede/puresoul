import girl from '../assets/girl.jpg'
import boy from '../assets/boy.jpg'
import Button, { ButtonBehavior, ButtonStyles } from './Button'
import UpdateProfile from '../pages/UpdateProfile'
import { useState } from 'react'


interface ProfileCardProps {
    name: string
    email: string
    createdAt: string
    gender: string
    age: number
    phoneNumber?: string,
}
export default function ProfileCard({ name, email, createdAt,gender,age, phoneNumber}: ProfileCardProps) {
  const [profileUpdated, setProfileUpdated] = useState(false)
  if(profileUpdated)
    return <UpdateProfile/>
  
  return (
    
    <div className='bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto flex flex-col gap-5'>
            <figure className="flex flex-row gap-4 md:gap-8">
                <img src={gender.toLowerCase()==="male"?boy:girl} className="w-24" alt="profile_image" />
                <figcaption className='flex flex-col gap-4'>
                    <h1 className='capitalize'>Name: {name}</h1>
                    <p>Email: {email}</p>
                    <p className='capitalize'>Phone Number: {phoneNumber}</p>
                    <p className='capitalize'>Gender: {gender}</p>
                    <p className='capitalize'>Age: {age}</p>
                    <p>Joined On { createdAt.split('T')[0]}</p>
                </figcaption>
            </figure>
            <Button behavior={ButtonBehavior.BUTTON} onClick={()=>setProfileUpdated(true)} customStyles={ButtonStyles.PRIMARY}>Update Profile</Button>
    </div>
  )
}
