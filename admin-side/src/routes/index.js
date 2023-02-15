import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/layouts/ProtectedRoute'
import Home from '../pages/Home'
import Items from '../pages/Items'
import Login from '../pages/Login'
import Categories from '../pages/Categories'
import Admins from '../pages/Admins'
import AddItems from '../pages/AddItems'

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
    path: '/items/new',
    element: (
      <ProtectedRoute>
        <AddItems />
      </ProtectedRoute>
    ),
  },
  {
    path: '/categories',
    element: (
      <ProtectedRoute>
        <Categories />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admins',
    element: (
      <ProtectedRoute>
        <Admins />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])
