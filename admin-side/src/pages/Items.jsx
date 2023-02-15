import MainLayout from '../components/layouts/MainLayout'
import TableItems from '../components/organisms/TableItems'
import { useItems } from '../hooks/useItems'

export default function Items() {
  const { items } = useItems()
  return (
    <MainLayout>
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Items</h1>
        <div className='divider'></div>
        <TableItems items={items} />
      </div>
    </MainLayout>
  )
}
