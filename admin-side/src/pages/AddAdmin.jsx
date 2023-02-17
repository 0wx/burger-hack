import MainLayout from '../components/layouts/MainLayout'
import AddAdminForm from '../components/organisms/AddAdminForm'

export default function AddAdmin() {
  return (
    <MainLayout title="Add Admin" selected="admins">
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Add Admin</h1>
        <div className='divider'></div>
        <div className='prose max-w-xs'>
          <AddAdminForm />
        </div>
      </div>
    </MainLayout>
  )
}