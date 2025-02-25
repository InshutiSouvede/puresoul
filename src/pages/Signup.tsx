import { z } from "zod";
import Button, { ButtonBehavior, ButtonStyles } from "../components/Button";
import InputLabel from "../components/InputLabel";
import { SignupSchema } from "../schemas/schemas";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { RouteLinks } from "../routes/routes";
import { Link } from "react-router";
type NewUser = z.infer<typeof SignupSchema>;
export default function Signup() {
  const{register, handleSubmit, formState:{errors,isValid} } = useForm<NewUser>({mode:"onTouched", resolver: zodResolver(SignupSchema)})
  console.log(isValid,errors, {...register('email')})
  return (
    <main className="lg:w-2/5 lg:mx-auto py-20 p-8">
      <h1 className="text-teal-600 font-bold uppercase border-b-4 w-max">Sign Up</h1>
      <form className="flex flex-col gap-8 py-8" onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="flex flex-col">
        <InputLabel id="name" {...register('name')}>Name</InputLabel>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
        <InputLabel id="email" {...register('email')}>Email</InputLabel>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col">
        <InputLabel type="password" id="password" {...register('password')}>Password</InputLabel>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="flex flex-col">
        <InputLabel type ="password" id="confirmPassword" {...register('confirmPassword')}>Confrim Password</InputLabel>
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        <Button type="submit" behavior={ButtonBehavior.BUTTON} disabled={!isValid} customStyles={isValid?ButtonStyles.PRIMARY:ButtonStyles.DISABLED}>Submit</Button>
        <div className="flex gap-2">
          <p>Already have an account?</p> <Link className="text-blue-600 underline" to={RouteLinks.LOGIN}>Login</Link>
        </div>
      </form>
    </main>
  )
}
