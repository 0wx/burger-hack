import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { api } from '../../helpers/fetch'
import { fetchCategories } from '../../stores/actions/actionCreator'

export default function EditCategoryForm({ category, exit }) {
  const [name, setName] = useState(category.name)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.put('/categories/' + category.id, { name })
      exit()
      dispatch(fetchCategories())
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
