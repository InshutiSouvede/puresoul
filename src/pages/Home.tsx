import { getCurrentUserId } from "../utils/auth";
import UseGetCurrentUser from "../hooks/UseGetCurrentUser";
import ProfileCard from "../components/ProfileCard";
import {  useLocation } from "react-router";
import { useEffect } from "react";

export default function Home() {
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
  return (
    <main className="lg:w-2/5 lg:mx-auto py-20 p-8 flex flex-col gap-12">
      <h1>Welcome {data!.data.name}</h1>
      <ProfileCard {...data!.data}/>
    </main>
  )
}
