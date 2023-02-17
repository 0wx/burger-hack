import Navbar from './Navbar'

export default function MainLayout({ children, className = 'p-8' }) {
  return (
    <>
      <Navbar />
      <div className='pt-20 min-h-screen min-w-full'>
        <div className={className}>{children}</div>
      </div>
    </>
  )
}
