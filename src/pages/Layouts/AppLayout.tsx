import { Navigate, Outlet } from "react-router";
import NavBar from "../../components/NavBar";
import { getAuthToken } from "../../utils/auth";
import { RouteLinks } from "../../routes/routes";

export default function AppLayout() {
  const token = getAuthToken()
  if(!token) return <Navigate to={RouteLinks.LOGIN} />
  return (
    <div className="">
        <NavBar />
        <Outlet />
    </div>
  )
}
