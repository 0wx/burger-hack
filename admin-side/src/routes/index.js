import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/layouts/ProtectedRoute'
import Home from '../pages/Home'
import Items from '../pages/Items'
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
    path: '/items',
    element: (
      <ProtectedRoute>
        <Items />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])
