/**
 * @typedef {object} Food
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} imgUrl
 * @property {number} authorId
 * @property {number} categoryId
 * @property {object} Category
 * @property {number} Category.id
 * @property {string} Category.name
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {object[]} Ingredients
 * @property {number} Ingredients.id
 * @property {number} Ingredients.itemId
 * @property {string} Ingredients.name
 */
/**
 * @typedef {object} Props
 * @property {Food} item
 * @property {number} index
 */
/**
 * @param {Props} props
 */
export default function ItemRow({ item, index }) {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar border rounded-lg'>
            <div className='mask mask-squircle w-12 h-12'>
              <img src={item.imgUrl} alt='burger' />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className='font-bold'>{item.name}</div>
          <div className='text-sm opacity-50'>Rp. {item.price}</div>
        </div>
      </td>
      <td>
        <div className='prose max-w-xs whitespace-pre-wrap'>
          <p>{item.description}</p>
        </div>
      </td>
      <td>{item.Category.name}</td>
      <td>
        <div className='prose max-w-xs whitespace-pre-wrap'>
          <p>{item.Ingredients.map(i => i.name).join(', ')}</p>
        </div>
      </td>
      <th>
      <div className='flex flex-col gap-2 items-start'>

        <button className='btn btn-ghost btn-xs'>Edit</button>
        <button className='btn btn-ghost btn-xs'>Remove</button>
      </div>
      </th>
    </tr>
  )
}
