import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../helpers/fetch'

export default function AddCategoryForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
  })

  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: Number(e.target.value) || e.target.value,
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data: item } = await api.post('/categories', data)
      navigate('/categories')
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

      <Link to='/categories'>
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
