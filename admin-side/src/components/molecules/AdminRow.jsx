export default function AdminRow({ admin }) {
  return (
    <tr key={admin.id}>
      <td>{admin.id}</td>
      <td>{admin.name}</td>
      <td>{admin.email}</td>
      <td>{admin.items.length}</td>
      <td>
        <button className='btn btn-sm btn-ghost'>Edit</button>
        <button className='btn btn-sm btn-ghost'>Delete</button>
      </td>
    </tr>
  )
}
