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
 * @property {Food} food
 */

import { Link } from 'react-router-dom'
import CartIcon from '../atoms/CartIcon'
import InfoIcon from '../atoms/InfoIcon'

/**
 * @param {Props} props
 */
export default function FoodCard(props) {
  return (
    <div className='h-60 aspect-video border-2 border-secondary rounded-lg overflow-hidden'>
      <div className='bg-secondary h-2/5'></div>
      <div className='flex flex-col items-center -translate-y-32 gap-1'>
        <div className='flex items-center gap-4'>
          <div className='avatar hover:scale-125 transition-all'>
            <div className='w-40 aspect-square'>
              <img src={props.food.imgUrl} alt='borgor' />
            </div>
          </div>
          <div className='text-base-100 bg-secondary border-[5px] py-2 px-5 rounded-xl border-base-100 font-extrabold rotate-6 translate-y-11 hover:rotate-0 transition-all'>
            Rp. {props.food.price}
          </div>
        </div>
        <div className='text-2xl font-extrabold flex items-center gap-4'>
          {props.food.name}{' '}
          <span className='text-base bg-primary text-base-100 px-3 py-1 rounded-lg'>
            {props.food.category.name}
          </span>
        </div>
        <div className='flex gap-2 mt-3 transition-all'>
          <div className='flex gap-2 w-36 bg-accent justify-center py-2 px-2 rounded-lg text-sm items-center font-bold cursor-pointer hover:bg-accent-focus'>
            <CartIcon /> Add to Cart
          </div>
          <Link to={'/menu/' + props.food.id}>
            <div className='flex gap-2 w-36 border-secondary border justify-center py-2 px-2 rounded-lg text-sm items-center font-bold cursor-pointer hover:bg-secondary hover:text-base-100'>
              <InfoIcon /> Detail
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
