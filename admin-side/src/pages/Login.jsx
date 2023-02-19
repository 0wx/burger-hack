import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import LoginForm from '../components/molecules/LoginForm'

export default function Login() {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/')
    }
  }, [navigate])
  
  return (
    <MainLayout nosidebar title='Login Page'>
      <div className='flex justify-center h-full pt-[20vh]'>
        <div className='prose max-w-xs'>
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  )
}
