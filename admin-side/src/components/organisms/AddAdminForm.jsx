import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../../helpers/fetch'

export default function AddAdminForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: Number(e.target.value) || e.target.value,
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data: item } = await api.post('/authors', data)
      navigate('/admins')
      console.log(item)
    } catch (error) {
      console.error(error)
    }
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