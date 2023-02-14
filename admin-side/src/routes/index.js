import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/layouts/ProtectedRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])
