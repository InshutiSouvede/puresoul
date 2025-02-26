import { NavLink, useNavigate } from "react-router";
import { RouteLinks } from "../routes/routes";
import Button, { ButtonBehavior, ButtonStyles } from "./Button";
import { logout } from "../utils/auth";

export default function NavBar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate(RouteLinks.SPLASH)
  }
  return (
    <nav className="flex bg-teal-600 justify-between p-4 items-center">
        <div className="flex  text-yellow-50 font-semibold gap-10">
        <NavLink end className={({isActive})=>isActive?"text-blue-300":"hover:text-blue-300"} to={RouteLinks.HOME}>Home</NavLink>
        <NavLink end className={({isActive})=>isActive?"text-blue-300":"hover:text-blue-300"} to={RouteLinks.UPDATE_PROFILE}>Update my Profile</NavLink>
        <NavLink end className={({isActive})=>isActive?"text-blue-300":"hover:text-blue-300"} to={RouteLinks.ALL_PROFILES}>All Profiles</NavLink>
        </div>
        <div className="w-max">

        <Button behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.DISABLED} onClick={handleLogout}>Logout</Button>
        </div>
    </nav>
  )
}
