import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const [authenticated, setAuthenticated] = useState(null)

  useEffect(() => {
    setAuthenticated(!!localStorage.access_token)
  }, [])

  if (authenticated === null) {
    return <div>Loading</div>
  }

  return authenticated ? children : <Navigate to='/login' />
}
