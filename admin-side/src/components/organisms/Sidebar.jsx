import { Link } from 'react-router-dom'
import HomeIcon from '../atoms/HomeIcon'
import PersonIcon from '../atoms/PersonIcon'
import PuzzleIcon from '../atoms/PuzzleIcon'
import SidebarButton from '../atoms/SidebarButton'
import SquarePlusIcon from '../atoms/SquarePlusIcon'

export default function Sidebar({ selected = '' }) {
  return (
    <div className='fixed md:static -translate-x-full md:translate-x-0 transition-all p-8 w-[198.2] bg-base-200 flex flex-col gap-2 z-10'>
      <Link to='/'>
        <SidebarButton active={selected === ''}>
          <HomeIcon /> Dashboard
        </SidebarButton>
      </Link>
      <Link to='/items'>
        <SidebarButton active={selected === 'items'}>
          <SquarePlusIcon /> Items
        </SidebarButton>
      </Link>
      <Link to='/categories'>
        <SidebarButton active={selected === 'categories'}>
          <PuzzleIcon /> Categories
        </SidebarButton>
      </Link>
      <div className='divider'></div>
      <Link to='/admins'>
        <SidebarButton active={selected === 'admins'}>
          <PersonIcon /> Admins
        </SidebarButton>
      </Link>
    </div>
  )
}
