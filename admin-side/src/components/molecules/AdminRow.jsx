import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeAdmin } from '../../stores/actions/actionCreator'
import EditAdminForm from './EditAdminForm'

export default function AdminRow({ admin }) {
  const dispatch = useDispatch()
  const [showEdit, setShowEdit] = useState(false)
  const handleDelete = async () => {
    dispatch(removeAdmin(admin.id))
  }
  return (
    <tr key={admin.id}>
      <td>{admin.id}</td>
      <td>{admin.name}</td>
      <td>{admin.email}</td>
      <td>{admin.items.length}</td>
      <td>
        {showEdit && (
          <div
            className='fixed z-50 top-0 left-0 h-screen w-screen bg-black bg-opacity-20 backdrop-blur transition-all flex justify-center items-center'
            onClick={() => setShowEdit(false)}
          >
            <EditAdminForm admin={admin} exit={() => setShowEdit(false)} />
          </div>
        )}
        <button onClick={() => setShowEdit(true)} className='btn btn-sm btn-ghost'>Edit</button>
        <button onClick={handleDelete} className='btn btn-sm btn-ghost'>
          Delete
        </button>
      </td>
    </tr>
  )
}
