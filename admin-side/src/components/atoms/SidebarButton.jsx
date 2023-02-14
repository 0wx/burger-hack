export default function SidebarButton({ children, active }) {
  return (
    <div
      className={
        'cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-base-300 ' +
        (active && 'bg-base-300')
      }
    >
      {children}
    </div>
  )
}
