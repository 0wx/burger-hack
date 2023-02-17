import { useState } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import { Link } from 'react-router-dom'
export default function Home() {
  const [hover, setHover] = useState(false)

  return (
    <MainLayout>
      <div className='grid grid-flow-col grid-cols-2 h-[50vh]'>
        <div className='flex justify-center items-center'>
          <div
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
          >
            <div
              className={
                'absolute transition-all translate-y-10 ' +
                (hover && '-translate-x-44 translate-y-0 -rotate-12')
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
                />
              </svg>
            </div>
            <div
              className={
                'absolute transition-all translate-x-44 translate-y-32 ' +
                (hover && 'translate-y-52 translate-x-72 rotate-12')
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                />
              </svg>
            </div>
            <div
              className={
                'absolute transition-all translate-x-44 translate-y-32 ' +
                (hover && 'translate-y-2 translate-x-96 rotate-12')
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='w-10 h-10'
              >
                <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
              </svg>
            </div>
            <div
              className={
                'avatar absolute translate-x-24 transition-all ' +
                (hover && 'translate-x-36 -translate-y-10 rotate-3 scale-125')
              }
            >
              <div className='w-56'>
                <img
                  src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/840fba2112775ceeff32c96d1ac01131b7e96a03-1333x1333.png?w=750&q=40&fit=max&auto=format'
                  alt='img-2'
                />
              </div>
            </div>
            <div
              className={
                'avatar absolute transition-all ' +
                (hover && '-translate-y-14 -rotate-1 scale-125')
              }
            >
              <div className='w-56'>
                <img
                  src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/84743a96a55cb36ef603c512d5b97c9141c40a33-1333x1333.png?w=750&q=40&fit=max&auto=format'
                  alt='img-1'
                />
              </div>
            </div>
            <div
              className={
                'avatar absolute transition-all -translate-x-24 ' +
                (hover && '-translate-y-8 -translate-x-36 -rotate-6 scale-125')
              }
            >
              <div className='w-56'>
                <img
                  src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/c50b5e30f0afae6cea9ccdd8eeea069bed721ee9-1333x1333.png?w=750&q=40&fit=max&auto=format'
                  alt='img-2'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-2 pt-36'>
          <div className='text-5xl font-bold'>Find your Joy</div>
          <div className='text-5xl font-bold'>
            Here at <span className='font-bold text-primary'>Burger Hack</span>
          </div>
          <Link to='/menu'>
            <div className='flex font-bold items-center gap-2 hover:gap-4 hover:bg-primary-focus transition-all bg-primary w-44 justify-start pl-7 rounded-3xl py-1 text-base-100 mt-5'>
              Explore Menu
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
