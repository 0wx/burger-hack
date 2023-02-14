import MainLayout from '../components/layouts/MainLayout'
import StatisticsCard, {
  StatisticsCardSkeleton,
} from '../components/molecules/StatisticsCard'
import { useStatistics } from '../hooks/useStatistics'

export default function Home() {
  const { statistics, loading } = useStatistics()
  return (
    <MainLayout title='Home Page'>
      <div className='flex gap-10 pt-5'>
        {loading ? (
          <>
            <StatisticsCardSkeleton />
            <StatisticsCardSkeleton />
          </>
        ) : (
          <>
            <StatisticsCard title='Items Count'>
              {statistics.items.length}
            </StatisticsCard>
            <StatisticsCard title='Categories Count'>
              {statistics.categories.length}
            </StatisticsCard>
          </>
        )}
      </div>
    </MainLayout>
  )
}
