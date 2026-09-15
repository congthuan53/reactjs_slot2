import { Navigate } from 'react-router-dom'

function Login() {
  const isLoggedIn = true

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }

  return <h1>Login</h1>
}

export default Login
