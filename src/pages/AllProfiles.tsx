import ProfileCard from "../components/ProfileCard"
import UseGetAllUsers from "../hooks/UseGetAllUsers"
import { getCurrentUserId } from "../utils/auth"

export default function AllProfiles() {
    const[{loading,data,error}] = UseGetAllUsers()
    
      if(loading) return <h1>Loading...</h1>
      if(error) return <h1>Oppd there was an Error</h1>
      console.log("data",data?.data)
      const profiles = data?.data.filter((user)=>user.id!== getCurrentUserId()).map((profile) => {
        return <ProfileCard key={profile.id} {...profile}/>
      })
      return (
        <main className="lg:w-2/5 lg:mx-auto py-20 p-8 flex flex-col gap-12">
          <h1 className="text-teal-600 font-bold uppercase w-max">Here are some other interesting profiles </h1>
          {profiles}
        </main>
      )
}
