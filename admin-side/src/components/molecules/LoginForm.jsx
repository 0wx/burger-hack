export default function LoginForm() {
  return (
    <div className='flex flex-col max-w-xs gap-4'>
      <input type='text' className='input input-bordered' placeholder='Email' />
      <input
        type='password'
        className='input input-bordered'
        placeholder='Password'
      />
      <button className='btn btn-primary'>Login</button>
    </div>
  )
}
