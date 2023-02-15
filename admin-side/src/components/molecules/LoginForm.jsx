export default function LoginForm() {
  const handleLogin = () => {
    localStorage.setItem('access_token', 123)
  }
  return (
    <div className='flex flex-col max-w-xs gap-4'>
      <input type='text' className='input input-bordered' placeholder='Email' />
      <input
        type='password'
        className='input input-bordered'
        placeholder='Password'
      />
      <button onClick={handleLogin} className='btn btn-primary'>
        Login
      </button>
    </div>
  )
}
