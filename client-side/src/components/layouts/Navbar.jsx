import { Link } from 'react-router-dom'
import BurgerHackIcon from '../atoms/BurgerHackIcon'

export default function Navbar() {
  return (
    <div className='h-20 bg-base-100 flex items-center jus px-8 fixed w-full justify-center z-40'>
      <div className='flex w-[45vw] gap-5 px-2'>
        <Link to='/menu'>
          <div className='font-bold cursor-pointer hover:text-primary text-lg'>
            Menu
          </div>
        </Link>
        <Link to='/'>
          <div className='font-bold cursor-pointer hover:text-primary text-lg'>
            Offers
          </div>
        </Link>
        <Link to='/categories'>
          <div className='font-bold cursor-pointer hover:text-primary text-lg'>
            Categories
          </div>
        </Link>
      </div>
      <Link to='/'>
        <div className='w-[calc(10vw-32px)] flex justify-center'>
          <BurgerHackIcon />
        </div>
      </Link>
      <div className='w-[45vw] flex justify-end px-2 gap-5'>
        <Link to='/login'>
          <div className='hover:scale-110 transition-all cursor-pointer font-bold text-base-100 bg-primary px-10 py-1 rounded-full'>
            Login
          </div>
        </Link>
        <Link to='/signup'>
          <div className='hover:scale-110 transition-all cursor-pointer font-bold text-base-100 bg-secondary px-10 py-1 rounded-full'>
            Sign Up
          </div>
        </Link>
      </div>
    </div>
  )
}
