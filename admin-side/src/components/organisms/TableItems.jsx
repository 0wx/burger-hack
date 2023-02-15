/**
 * @typedef {object} Food
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} imgUrl
 * @property {number} authorId
 * @property {number} categoryId
 * @property {object} category
 * @property {number} category.id
 * @property {string} category.name
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {object[]} ingredients
 * @property {number} ingredients.id
 * @property {number} ingredients.itemId
 * @property {string} ingredients.name
 */
/**
 * @typedef {object} Props
 * @property {Food[]} items
 */

import ItemRow from '../molecules/ItemRow'

/**
 * @param {Props} props
 */
export default function TableItems({ items }) {
  return (
    <div className='overflow-x-auto w-full'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Name & price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Ingredients</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return <ItemRow item={item} key={item.id} index={index} />
          })}
        </tbody>
      </table>
    </div>
  )
}
