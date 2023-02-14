import MainLayout from '../components/layouts/MainLayout'
import LoginForm from '../components/molecules/LoginForm'

export default function Login() {
  return (
    <MainLayout>
      <div className='flex items-center justify-center h-full'>
        <div className='prose max-w-xs'>
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  )
}
