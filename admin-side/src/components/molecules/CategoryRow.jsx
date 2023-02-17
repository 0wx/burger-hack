export default function CategoryRow({ category }) {
  return (
    <tr key={category.id}>
      <th>{category.id}</th>
      <td>{category.name}</td>
      <td>{category.items.length}</td>
      <td>
        <button className='btn btn-sm btn-ghost'>Edit</button>
        <button className='btn btn-sm btn-ghost'>Remove</button>
      </td>
    </tr>
  )
}
