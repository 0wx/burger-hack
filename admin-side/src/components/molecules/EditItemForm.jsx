import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../helpers/fetch'
import { fetchItems } from '../../stores/actions/actionCreator'

export default function EditItemsForm({ item, exit }) {
  const [data, setData] = useState(item)
  const dispatch = useDispatch()
  const [ingredients, setIngredients] = useState(
    item.ingredients
      .map((v) => {
        if (typeof v === 'string') return v
        return v.name
      })
      .join(', ')
  )
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categories } = await api.get('/categories')
        setCategories(categories)
      } catch (error) {
        console.error(error)
        toast(error.message)
      }
    }

    fetchCategories()
  }, [])

  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: Number(e.target.value) || e.target.value,
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data: _item } = await api.put('/items/' + item.id, {
        ...data,
        ingredients: ingredients.split(',').map((v) => v.trim()),
      })

      dispatch(fetchItems()).then(() => {
        exit()
      })
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
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col my-4'>
          <label htmlFor='description'>Description</label>
          <textarea
            className='input input-bordered'
            id='description'
            name='description'
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col my-4'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='input input-bordered'
            id='price'
            name='price'
            value={data.price}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col my-4'>
          <label htmlFor='category'>Category</label>
          <select
            className='select select-bordered'
            id='category'
            name='categoryId'
            value={data.categoryId}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col my-4'>
          <label htmlFor='image'>Image</label>
          <input
            type='text'
            className='input input-bordered'
            id='image'
            name='imgUrl'
            value={data.image}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col my-4'>
          <label htmlFor='ingredients'>
            Ingredients (separate each ingredients with coma)
          </label>
          <input
            type='text'
            className='input input-bordered'
            id='ingredients'
            name='ingredients'
            value={ingredients}
            onChange={(e) => {
              setIngredients(e.target.value)
            }}
          />
        </div>
        <Link to='/items'>
          <button type='submit' className='btn btn-ghost mr-4'>
            Cancel
          </button>
        </Link>
        <button type='submit' className='btn btn-primary'>
          Save
        </button>
      </form>
    </div>
  )
}
