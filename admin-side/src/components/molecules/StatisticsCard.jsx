export default function StatisticsCard({ title, children }) {
  return (
    <div className='border rounded-lg py-5 px-8 h-36 aspect-video bg-base-200 shadow-xl hover:shadow hover:translate-x-1 hover:translate-y-1 transition-all'>
      <div className='font-bold text-lg opacity-70'>{title}</div>
      <div className='font-extrabold text-7xl'>{children}</div>
    </div>
  )
}

export const StatisticsCardSkeleton = () => {
  return (
    <div className='animate-pulse border rounded-lg py-5 px-8 h-36 aspect-video bg-base-200'>
      <div className='font-bold text-lg bg-base-300 w-40 rounded-lg h-5'></div>
      <div className='font-extrabold text-7xl bg-base-300 w-16 rounded-lg h-16 mt-4'></div>
    </div>
  )
}
