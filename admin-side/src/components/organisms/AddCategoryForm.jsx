import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addCatogery } from '../../stores/actions/actionCreator'

export default function AddCategoryForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [data, setData] = useState({
    name: '',
  })

  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(addCatogery(data)).then(() => navigate('/categories'))
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
