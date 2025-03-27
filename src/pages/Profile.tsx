import { getCurrentUserId } from "../utils/auth";
import UseGetCurrentUser from "../hooks/UseGetCurrentUser";
import ProfileCard from "../components/ProfileCard";
import {  useLocation } from "react-router";
import { useEffect } from "react";

export default function Profile() {
  const userId = getCurrentUserId()

  
  const[{loading,data,error}, refetch] = UseGetCurrentUser(userId)

  const updated = useLocation().state
  console.log(updated)
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    if(updated){
      refetch({signal})
    }
    return ()=>{
      controller.abort()
    }
  },[])

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Oppd there was an Error</h1>
  console.log("user data",data)
  return (
    <main >
      <h1 className="text-purple-600 font-bold uppercase w-max m-auto pt-4">Welcome {data!.data.name} 🤗</h1>
      <ProfileCard {...data!.data}/>      
    </main>
  )
}
