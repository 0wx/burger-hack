import HomeIcon from '../atoms/HomeIcon'
import PuzzleIcon from '../atoms/PuzzleIcon'
import SidebarButton from '../atoms/SidebarButton'
import SquarePlusIcon from '../atoms/SquarePlusIcon'

export default function Sidebar() {
  return (
    <div className='fixed md:static -translate-x-full md:translate-x-0 transition-all p-8 border w-60 bg-slate-100 flex flex-col gap-2'>
      <SidebarButton active>
        <HomeIcon /> Dashboard
      </SidebarButton>
      <SidebarButton>
        <SquarePlusIcon /> Items
      </SidebarButton>
      <SidebarButton>
        <PuzzleIcon /> Categories
      </SidebarButton>
    </div>
  )
}
