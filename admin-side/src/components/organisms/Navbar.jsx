import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../stores/actions/actionCreator'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <div className='h-16 flex items-center px-11 fixed w-full justify-between bg-base-300 shadow-sm bg-opacity-50 backdrop-blur z-20'>
      <Link to='/'>
        <div className='font-extrabold text-2xl flex items-center gap-4'>
          Burger Hack
          <span className='text-sm bg-yellow-300 py-1 px-4 rounded-lg'>
            Admin
          </span>
        </div>
      </Link>
      <div className='flex'>
        {!user.user ? (
          <>
            <Link to='/login'>
              <button className='btn btn-md btn-ghost'>Login</button>
            </Link>
            <Link>
              <button className='btn btn-md btn-ghost'>Sign Up</button>
            </Link>
          </>
        ) : (
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} className='flex items-center gap-4 hover:bg-base-300 py-1 px-4 rounded-lg cursor-pointer'>
              <div className='avatar'>
                <div className='w-8'>
                  <img src='/profile_1.png' alt='profile' />
                </div>
              </div>
              <div>
                <div className='font-extrabold text-sm'>{user.user.name}</div>
                <div className='text-xs opacity-50 max-w-[90px] truncate'>
                  {user.user.email}
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <button onClick={handleLogout} className='btn btn-ghost'>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
