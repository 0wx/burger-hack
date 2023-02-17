import { Link } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import TableItems from '../components/organisms/TableItems'
import { useItems } from '../hooks/useItems'

export default function Items() {
  const { items } = useItems()
  return (
    <MainLayout title='Item List' selected='items'>
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Items</h1>
        <div className='divider'></div>
        <div className='flex justify-between items-center mb-4'>
          <div>
            Showing 1 - {items.length} from {items.length}
          </div>
          <div>
            <Link to='/items/new'>
              <button className='btn btn-primary'>Add Items</button>
            </Link>
          </div>
        </div>
        <TableItems items={items} />
      </div>
    </MainLayout>
  )
}
