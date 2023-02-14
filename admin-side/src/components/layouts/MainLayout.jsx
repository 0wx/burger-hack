import { useTitle } from '../../hooks/useTitle'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function MainLayout({ children, nosidebar, title }) {
  useTitle(title)
  return (
    <>
      <Navbar />
      <div className='pt-16 flex bg-base-100 min-h-screen'>
        {!nosidebar && <Sidebar />}
        <div className='py-4 px-10 flex-grow'>{children}</div>
      </div>
    </>
  )
}
