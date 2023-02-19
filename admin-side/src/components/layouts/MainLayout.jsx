import { useTitle } from '../../hooks/useTitle'
import Navbar from '../organisms/Navbar'
import Sidebar from '../organisms/Sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userParse } from '../../stores/actions/actionCreator'

export default function MainLayout({ children, nosidebar, title, selected }) {
  useTitle(title)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  useEffect(() => {
    if(!user && localStorage.getItem('access_token')) dispatch(userParse())
  }, [dispatch, user]) 
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className='pt-16 flex bg-base-100 min-h-screen'>
        {!nosidebar && <Sidebar selected={selected} />}
        <div className='py-4 px-10 flex-grow overflow-auto'>{children}</div>
      </div>
    </>
  )
}
