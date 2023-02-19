import MainLayout from '../components/layouts/MainLayout'
import AdminRow from '../components/molecules/AdminRow'
import Table from '../components/organisms/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAdmins } from '../stores/actions/actionCreator'

export default function Admins() {
  const { admins } = useSelector((state) => state.admins)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAdmins())
  }, [dispatch])
  return (
    <MainLayout title='Admin List' selected='admins'>
      <div className='w-full'>
        <h1 className='text-4xl font-bold'>Admins</h1>
        <div className='divider'></div>
        <div className='flex justify-between items-center mb-4'>
          <div>
            Showing 1 - {admins.length} from {admins.length}
          </div>
          <div>
            <Link to='/admins/new'>
              <button className='btn btn-primary'>Add Admin</button>
            </Link>
          </div>
        </div>
        <Table headers={['Id', 'Name', 'Email', 'Items', 'Action']}>
          {admins.map((admin) => (
            <AdminRow admin={admin} key={admin.id} />
          ))}
        </Table>
      </div>
    </MainLayout>
  )
}
