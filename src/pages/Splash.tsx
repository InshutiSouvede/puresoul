import Button, { ButtonBehavior, ButtonStyles } from "../components/Button";
import { RouteLinks } from "../routes/routes";

export default function Splash() {
  return (
    <main className="flex flex-col items-center justify-center lg:w-2/5 lg:mx-auto py-20 p-8">
     <h1 className="text-3xl font-semibold py-8"> Welcome to Profile Store {"(^_^)"}</h1>
      <div className="flex flex-col gap-12 w-full">
      <Button behavior={ButtonBehavior.LINK} path={RouteLinks.LOGIN} customStyles={ButtonStyles.PRIMARY}>Login</Button>
      <Button behavior={ButtonBehavior.LINK} path={RouteLinks.SIGNUP} customStyles={ButtonStyles.PRIMARY}>Sign Up</Button>
      </div>
    </main>
  )
}
