import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCategories,
  resetCategories,
} from '../stores/actions/actionCreator'
import MainLayout from '../components/layouts/MainLayout'

export default function Categories() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categories)

  useEffect(() => {
    dispatch(fetchCategories())
    return () => {
      dispatch(resetCategories())
    }
  }, [dispatch])

  return <MainLayout>
    <div className='border border-red-500'></div>

  </MainLayout>
}
