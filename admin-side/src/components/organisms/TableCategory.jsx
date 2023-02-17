import CategoryRow from '../molecules/CategoryRow'

export default function TableCategory({ categories }) {
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Total Items</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <CategoryRow category={category} key={category.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
