import Navbar from './Navbar'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className='pt-20 min-h-screen min-w-full'>
        <div className='p-8'>{children}</div>
      </div>
    </>
  )
}
