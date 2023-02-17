import MainLayout from '../components/layouts/MainLayout'
import AddCategoryForm from '../components/organisms/AddCategoryForm'

export default function AddCatogeries() {
  return (
    <MainLayout title="Add Category" selected="categories">
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Add Category</h1>
        <div className='divider'></div>
        <div className='prose max-w-xs'>
          <AddCategoryForm />
        </div>
      </div>
    </MainLayout>
  )
}