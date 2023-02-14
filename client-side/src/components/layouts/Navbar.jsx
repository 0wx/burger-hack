import BurgerHackIcon from '../atoms/BurgerHackIcon'

export default function Navbar() {
  return (
    <div className='h-20 bg-base-100 flex items-center jus px-8 fixed w-full justify-center'>
      <div className='flex w-[45vw] gap-5 px-2'>
        <div className='font-bold cursor-pointer hover:text-primary text-lg'>Menu</div>
        <div className='font-bold cursor-pointer hover:text-primary text-lg'>Offers</div>
        <div className='font-bold cursor-pointer hover:text-primary text-lg'>Categories</div>
      </div>
      <div className='w-[calc(10vw-32px)] flex justify-center'>
        <BurgerHackIcon />
      </div>
      <div className='w-[45vw] flex justify-end px-2 gap-5'>
        <div className='hover:scale-110 transition-all cursor-pointer font-bold text-base-100 bg-primary px-10 py-1 rounded-full'>Login</div>
        <div className='hover:scale-110 transition-all cursor-pointer font-bold text-base-100 bg-secondary px-10 py-1 rounded-full'>Sign Up</div>     
      </div>
    </div>
  )
}
