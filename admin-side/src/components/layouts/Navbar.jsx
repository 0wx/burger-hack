export default function Navbar() {
  return (
    <div className='h-16 flex items-center px-11 fixed w-full justify-between bg-base-300 shadow-sm bg-opacity-50 backdrop-blur'>
      <div className='font-extrabold text-2xl flex items-center gap-4'>
        Burger Hack
        <span className='text-sm bg-yellow-300 py-1 px-4 rounded-lg'>
          Admin
        </span>
      </div>
      <div className='flex'>
        <button className='btn btn-md btn-ghost'>Login</button>
        <button className='btn btn-md btn-ghost'>Sign Up</button>
        <div className='flex items-center gap-4 hover:bg-base-300 py-1 px-4 rounded-lg cursor-pointer'>
          <div className='avatar'>
            <div className='w-8'>
              <img src='/profile_1.png' alt='profile' />
            </div>
          </div>
          <div>
            <div className='font-extrabold text-sm'>Husin</div>
            <div className='text-xs opacity-50 max-w-[90px] truncate'>husin@hackburger.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}
