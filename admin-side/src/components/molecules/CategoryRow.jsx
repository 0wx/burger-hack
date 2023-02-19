import { api } from '../../helpers/fetch'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../stores/actions/actionCreator'
import { useState } from 'react'
import EditCategoryForm from './EditCategoryForm'

export default function CategoryRow({ category }) {
  const dispatch = useDispatch()
  const [showEdit, setShowEdit] = useState(false)
  const handleRemove = async () => {
    try {
      const { data } = await api.delete(`/categories/${category.id}`)
      console.log(data)
      dispatch(fetchCategories())
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <tr key={category.id}>
      <th>{category.id}</th>
      <td>{category.name}</td>
      <td>{category.items.length}</td>
      <td>
        {showEdit && (
          <div
            className='fixed z-50 top-0 left-0 h-screen w-screen bg-black bg-opacity-20 backdrop-blur transition-all flex justify-center items-center'
            onClick={() => setShowEdit(false)}
          >
            <EditCategoryForm
              category={category}
              exit={() => setShowEdit(false)}
            />
          </div>
        )}
        <button
          onClick={() => setShowEdit(true)}
          className='btn btn-sm btn-ghost'
        >
          Edit
        </button>
        <button onClick={handleRemove} className='btn btn-sm btn-ghost'>
          Remove
        </button>
      </td>
    </tr>
  )
}
