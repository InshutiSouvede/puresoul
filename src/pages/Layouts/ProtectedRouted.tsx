
import { getAuthToken } from '../../utils/auth'
import { Navigate, Outlet } from 'react-router'
import { RouteLinks } from '../../routes/routes'

export default function ProtecteRoutesLayout() {
    const token = getAuthToken()
    if(!token) return <Navigate to={RouteLinks.HOME} />
    return (
      <div>
          <Outlet />
      </div>
    )
}
