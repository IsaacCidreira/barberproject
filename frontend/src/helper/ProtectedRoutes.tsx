import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const ProtectedRoutes = ({ children }: any) => {
  const { userLogged } = useContext(UserContext)
  const login = userLogged()
  return login ? children : <Navigate to="/" />
}

export default ProtectedRoutes  