import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className='pt-16 flex bg-base-100 min-h-screen'>
        <Sidebar />
        <div className='py-4 px-10 flex-grow'>{children}</div>
      </div>
    </>
  )
}
