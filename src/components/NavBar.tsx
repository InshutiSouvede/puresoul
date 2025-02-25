import { NavLink } from "react-router";
import { RouteLinks } from "../routes/routes";

export default function NavBar() {
  return (
    <nav className="flex text-yellow-50 font-semibold p-4 gap-10 bg-teal-600">
        <NavLink end className={({isActive})=>isActive?"text-blue-300":"hover:text-blue-300"} to={RouteLinks.HOME}>Home</NavLink>
        <NavLink end className={({isActive})=>isActive?"text-blue-300":"hover:text-blue-300"} to={RouteLinks.NEW_EXPENSE}>New Expense</NavLink>
        <NavLink end className={({isActive})=>isActive?"text-blue-300":"hover:text-blue-300"} to={RouteLinks.ALL_EXPENSES}>All Expenses</NavLink>
        <NavLink end className={({isActive})=>isActive?"text-blue-300":"hover:text-blue-300"} to={RouteLinks.NEW_MONTH}>New Month</NavLink>
    </nav>
  )
}
