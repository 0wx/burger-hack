import MainLayout from '../components/layouts/MainLayout'
import AddItemsForm from '../components/organisms/AddItemsForm'

export default function AddItems() {
  return (
    <MainLayout title="Add Items" selected="items">
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Add Items</h1>
        <div className='divider'></div>
        <div className='prose max-w-xs'>
          <AddItemsForm />
        </div>
      </div>
    </MainLayout>
  )
}