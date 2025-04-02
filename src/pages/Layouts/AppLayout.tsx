import { Outlet } from "react-router";
import NavBar from "../../components/NavBar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <NavBar />
        <Outlet />
        <footer className="text-center mt-12 text-gray-600">
        <p>© 2025 PureSoul. Your Mental Health Matters.</p>
      </footer>
    </div>
  )
}
