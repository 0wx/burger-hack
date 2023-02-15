import MainLayout from '../components/layouts/MainLayout'
import TableCategory from '../components/organisms/TableCategory'
import { useCategories } from '../hooks/useCategories'

export default function Items() {
  const { categories } = useCategories()
  return (
    <MainLayout title="Category List" selected="categories">
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Categories</h1>
        <div className='divider'></div>
        <TableCategory categories={categories} />
      </div>
    </MainLayout>
  )
}
