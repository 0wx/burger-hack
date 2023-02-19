import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { addAdmin } from '../../stores/actions/actionCreator'

export default function AddAdminForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: Number(e.target.value) || e.target.value,
    })

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addAdmin(data)).then(() => navigate('/admins'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col my-4'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='input input-bordered'
          id='name'
          name='name'
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col my-4'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='input input-bordered'
          id='email'
          name='email'
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col my-4'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='input input-bordered'
          id='password'
          name='password'
          value={data.password}
          onChange={handleChange}
        />
      </div>

      <Link to='/admins'>
        <button type='submit' className='btn btn-ghost mr-4'>
          Cancel
        </button>
      </Link>
      <button type='submit' className='btn btn-primary'>
        Save
      </button>
    </form>
  )
}
