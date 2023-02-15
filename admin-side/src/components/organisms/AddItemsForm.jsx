import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../helpers/fetch'

export default function AddItemsForm() {
  const [data, setData] = useState({
    name: '',
    description: '',
    price: 0,
    authorId: 1,
    categoryId: null,
    imgUrl: '',
  })
  const [ingredients, setIngredients] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categories } = await api.get('/categories')
        setCategories(categories)
      } catch (error) {
        console.error(error)
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
      const { data: item } = await api.post('/items', data)
      await Promise.all(
        ingredients
          .split(',')
          .map((ingredient) =>
            api.post('/ingredients', { name: ingredient.trim(), itemId: item.id })
          )
      )
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
          <option value=''>Select a category</option>
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
        <label htmlFor='ingredients'>Ingredients</label>
        <input
          type='text'
          className='input input-bordered'
          id='ingredients'
          name='ingredients'
          value={data.ingredients}
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
  )
}
