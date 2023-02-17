import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postLoginUser } from '../../stores/actions/user'

export default function LoginForm() {
  const dispatch = useDispatch()
  const [data, setData] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    dispatch(postLoginUser(data))
  }
  return (
    <div className='flex flex-col max-w-xs gap-4'>
      <input
        type='text'
        className='input input-bordered'
        name='email'
        placeholder='Email'
        onChange={handleChange}
      />
      <input
        type='password'
        className='input input-bordered'
        name='password'
        placeholder='Password'
        onChange={handleChange}
      />
      <button onClick={handleLogin} className='btn btn-primary'>
        Login
      </button>
    </div>
  )
}
