import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editAdmin } from '../../stores/actions/actionCreator'

export default function EditAdminForm({ admin, exit }) {
  const [data, setData] = useState({ ...admin, password: '' })
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(editAdmin(data)).then(() => {
      exit()
    })
  }
  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='bg-base-100 p-10 rounded-lg'
    >
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
          <label htmlFor='password'>New Password</label>
          <input
            type='password'
            className='input input-bordered'
            id='password'
            name='password'
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={exit} type='submit' className='btn btn-ghost mr-4'>
          Cancel
        </button>
        <button type='submit' className='btn btn-primary'>
          Save
        </button>
      </form>
    </div>
  )
}
