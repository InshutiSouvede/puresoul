import { z } from "zod";
import Button, { ButtonBehavior, ButtonStyles } from "../components/Button";
import InputLabel from "../components/InputLabel";
import { SignupSchema } from "../schemas/schemas";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { RouteLinks } from "../routes/routes";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import UseSignup from "../hooks/UseSignup";
type NewUser = z.infer<typeof SignupSchema>;
export default function Signup() {
  const [{loading},execute] = UseSignup()
  const navigate = useNavigate()
  const{register, handleSubmit, formState:{errors,isValid} } = useForm<NewUser>({mode:"onTouched", resolver: zodResolver(SignupSchema)})
  const [submitError,setSubmitError] = useState<string | null>(null)
  const handleSignup = (data:NewUser)=>{
    execute({
      data
    })
      .then((res) => {
        console.log(res)
        if(!res.data.data){
          throw 'Could not create user'
        }
        navigate(RouteLinks.LOGIN)
        setSubmitError(null)
      })
      .catch(() => {
        setSubmitError("An error occurred. Please try again.")
      })
  }
  return (
    <main className="lg:w-2/5 lg:mx-auto py-20 p-8">
      <h1 className="text-purple-600 font-bold uppercase border-b-4 w-max">Sign Up</h1>
      <form className="flex flex-col gap-8 py-8" onSubmit={handleSubmit(handleSignup)}>
        {submitError && <p className="text-red-500">{submitError}</p>}
        
        <div className="flex flex-col">
        <InputLabel id="name" {...register('name')}>Name</InputLabel>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        
        <div className="flex flex-col">
        <InputLabel id="email" {...register('email')}>Email</InputLabel>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        
        <div className="flex flex-col">
        <InputLabel id="phoneNumber" {...register('phoneNumber')}>Phone Number</InputLabel>
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
        </div>
        
        <div className="flex flex-col">
        <InputLabel id="gender" {...register('gender')}>Gender</InputLabel>
        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
        </div>
        
        <div className="flex flex-col">
        <InputLabel id="age" {...register('age',{valueAsNumber: true})}>Age</InputLabel>
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
        
        <div className="flex flex-col">
        <InputLabel type="password" id="password" {...register('password')}>Password</InputLabel>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        
        <div className="flex flex-col">
        <InputLabel type ="password" id="confirmPassword" {...register('confirmPassword')}>Confrim Password</InputLabel>
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        
        <Button type="submit" behavior={ButtonBehavior.BUTTON} disabled={!isValid || loading} customStyles={isValid?ButtonStyles.PRIMARY:ButtonStyles.DISABLED}>{loading?"Loading...":"Submit"}</Button>
        <div className="flex gap-2">
          <p>Already have an account?</p> <Link className="text-blue-600 underline" to={RouteLinks.LOGIN}>Login</Link>
        </div>
      </form>
    </main>
  )
}
