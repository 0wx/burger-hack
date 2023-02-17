import { createBrowserRouter } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Menu from '../pages/Menu'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/menu/:id',
    element: <Detail />,
  },
])
