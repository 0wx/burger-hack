import { useTitle } from '../../hooks/useTitle'
import Navbar from '../organisms/Navbar'
import Sidebar from '../organisms/Sidebar'

export default function MainLayout({ children, nosidebar, title, selected }) {
  useTitle(title)
  return (
    <>
      <Navbar />
      <div className='pt-16 flex bg-base-100 min-h-screen'>
        {!nosidebar && <Sidebar selected={selected} />}
        <div className='py-4 px-10 flex-grow overflow-auto'>{children}</div>
      </div>
    </>
  )
}
