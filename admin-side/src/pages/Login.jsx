import MainLayout from '../components/layouts/MainLayout'
import LoginForm from '../components/molecules/LoginForm'

export default function Login() {
  return (
    <MainLayout nosidebar title="Login Page">
      <div className='flex justify-center h-full pt-[20vh]'>
        <div className='prose max-w-xs'>
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  )
}
