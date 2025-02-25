import { Link } from "react-router";
import Button, { ButtonBehavior, ButtonStyles } from "../components/Button";
import InputLabel from "../components/InputLabel";
import { RouteLinks } from "../routes/routes";
import { ChangeEvent, FormEvent, useState } from "react";
import useLogin from "../hooks/UseLogin";

export default function Login() {
  const [credentials, setCredentials] = useState({email: '', password: ''})
  const {login, loading} = useLogin()
  const [submissionError, setSubmissionError] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = event.target
    setCredentials({...credentials, [name]: value})
  }
  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await login(credentials.email,credentials.password)
    } catch (error) {
      setSubmissionError(String(error))
    }
  }
  return (
    <main className="lg:w-2/5 lg:mx-auto py-20 p-8">
      <h1 className="text-teal-600 font-bold w-max uppercase border-b-4">Login</h1>
      <form className="flex flex-col gap-8 py-8" onSubmit={handleSubmit}>
        {submissionError && <p className="text-red-500">{submissionError}</p>}
        <InputLabel type="email"  required onChange={handleChange} id="email" name="email">Email</InputLabel>
        <InputLabel type="password" required onChange ={handleChange} id="password" name="password">Password</InputLabel>
        <Button behavior={ButtonBehavior.BUTTON} disabled={loading}  customStyles={ButtonStyles.PRIMARY}>{loading?'Loading...':'Login'}</Button>
        <div className="flex gap-2">
          <p>Don't have an account?</p> <Link className="text-blue-600 underline" to={RouteLinks.SIGNUP}>Sign Up</Link>
        </div>
      </form>
    </main>
  )
}