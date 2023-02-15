import MainLayout from '../components/layouts/MainLayout'
import TableCategory from '../components/organisms/TableCategory'
import { useCategories } from '../hooks/useCategories'
import { Link } from 'react-router-dom'

export default function Items() {
  const { categories } = useCategories()
  return (
    <MainLayout title='Category List' selected='categories'>
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Categories</h1>
        <div className='divider'></div>
        <div className='flex justify-between items-center mb-4'>
          <div>
            Showing 1 - {categories.length} from {categories.length}
          </div>
          <div>
            <Link to='/categories/new'>
              <button className='btn btn-primary'>Add Categories</button>
            </Link>
          </div>
        </div>
        <TableCategory categories={categories} />
      </div>
    </MainLayout>
  )
}
