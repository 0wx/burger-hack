import { Link } from 'react-router-dom'
import HomeIcon from '../atoms/HomeIcon'
import PuzzleIcon from '../atoms/PuzzleIcon'
import SidebarButton from '../atoms/SidebarButton'
import SquarePlusIcon from '../atoms/SquarePlusIcon'

export default function Sidebar() {
  return (
    <div className='fixed md:static -translate-x-full md:translate-x-0 transition-all p-8 w-60 bg-base-200 flex flex-col gap-2 z-10'>
      <Link to='/'>
        <SidebarButton active>
          <HomeIcon /> Dashboard
        </SidebarButton>
      </Link>
      <Link to='/items'>
        <SidebarButton>
          <SquarePlusIcon /> Items
        </SidebarButton>
      </Link>
      <Link to='/categories'>
        <SidebarButton>
          <PuzzleIcon /> Categories
        </SidebarButton>
      </Link>
    </div>
  )
}
