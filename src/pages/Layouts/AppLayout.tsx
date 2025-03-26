import { Outlet } from "react-router";
import NavBar from "../../components/NavBar";

export default function AppLayout() {
  return (
    <div className="">
        <NavBar isLoggedIn = {false} />
        <Outlet />
    </div>
  )
}
