import { useNavigate } from "react-router"
import InputLabel from "../components/InputLabel"
import { RouteLinks } from "../routes/routes"
import {  useState } from "react"
import UseUpdateUser from "../hooks/UseUpdateUser"
import { getCurrentUserId } from "../utils/auth"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { updateUserSchema } from "../schemas/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import Button, { ButtonBehavior, ButtonStyles } from "../components/Button"
import UseGetCurrentUser from "../hooks/UseGetCurrentUser"

type UpdateUser = z.infer<typeof updateUserSchema>
export default function UpdateProfile() {
  const currentUserId = getCurrentUserId()
  const [formChanged,setFormChanged] = useState(false)

  const [{data:currentUserInformation, loading: currentUserLoading}] = UseGetCurrentUser(currentUserId)
  const [{loading},execute] = UseUpdateUser(currentUserId)
  const navigate = useNavigate()
  const{register, handleSubmit, formState:{errors,isValid}, getValues, } = useForm<UpdateUser>({mode:"onSubmit", resolver: zodResolver(updateUserSchema)})
  const [submitError,setSubmitError] = useState<string | null>(null)
  
  const handleSignup = (data:UpdateUser)=>{
    execute({
      data
    })
      .then((res) => {
        console.log("update res",res)
        if(!res.data.data){
          throw 'Could not create user'
        }
        navigate(RouteLinks.HOME,{state:true})
        setSubmitError(null)
      })
      .catch(() => {
        setSubmitError("An error occurred. Please try again.")
      })
  }

  const defaultValues = {
    name: currentUserInformation?.data.name,
    email: currentUserInformation?.data.email,
    gender: currentUserInformation?.data.gender,
    description: currentUserInformation?.data.description,
    newPassword: "",
    confirmNewPassword: ""
  }


  const checkFormChanged = () =>{
    const isChanged = JSON.stringify(getValues()) !== JSON.stringify(defaultValues)
    setFormChanged(isChanged)
    return isChanged
}
  if(currentUserLoading) return <h1>Loading...</h1>
  return (
    <main className="lg:w-2/5 lg:mx-auto py-20 p-8">
      <h1 className="text-teal-600 font-bold uppercase border-b-4 w-max">Update profile</h1>
      <form className="flex flex-col gap-8 py-8" onSubmit={handleSubmit(handleSignup)}>
        {submitError && <p className="text-red-500">{submitError}</p>}
        <div className="flex flex-col">
        <InputLabel id="name" {...register('name',{
          onChange: () => checkFormChanged(),
          minLength:0
        })} defaultValue={defaultValues.name}>Name</InputLabel>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col">
        <InputLabel id="email" {...register('email',{
          onChange: () => checkFormChanged()
        })} defaultValue={defaultValues.email}>Email</InputLabel>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col">
        <InputLabel id="gender" {...register('gender',{
          onChange: () => checkFormChanged()
        })} defaultValue={defaultValues.gender}>Gender</InputLabel>
        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
        </div>

        <div className="flex flex-col">
        <InputLabel id="description" {...register('description',{
          onChange: () => checkFormChanged(),
          minLength:0
        })} defaultValue={defaultValues.description}>My Fun Fact</InputLabel>
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>

        <Button type="submit" behavior={ButtonBehavior.BUTTON} disabled={!isValid|| loading || !formChanged} customStyles={!isValid ||loading|| formChanged?ButtonStyles.PRIMARY:ButtonStyles.DISABLED}>{loading?"Loading...":"Submit"}</Button>
        <Button behavior={ButtonBehavior.LINK} path={RouteLinks.HOME} customStyles={ButtonStyles.PRIMARY}>Cancel</Button>
      </form>
    </main>
  )
}
