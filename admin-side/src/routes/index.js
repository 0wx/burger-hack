import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '../components/layouts/ProtectedRoute'
import Home from '../pages/Home'
import Items from '../pages/Items'
import Login from '../pages/Login'
import Categories from '../pages/Categories'
import Admins from '../pages/Admins'
import AddItems from '../pages/AddItems'
import AddCatogeries from '../pages/AddCategory'
import AddAdmin from '../pages/AddAdmin'

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
    path: '/categories/new',
    element: (
      <ProtectedRoute>
        <AddCatogeries />
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
    path: '/admins/new',
    element: (
      <ProtectedRoute>
        <AddAdmin />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])
