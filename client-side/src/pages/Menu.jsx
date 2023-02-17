import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../components/layouts/MainLayout'
import FoodCard from '../components/molecules/FoodCard'
import { fetchItems, resetItems } from '../stores/actions/actionCreator'

export default function Menu() {
  const foods = useSelector((state) => state.items.items)
  const dispatch = useDispatch()
  console.log(foods)
  useEffect(() => {
    dispatch(fetchItems())
    return () => {
      dispatch(resetItems())
    }
  }, [dispatch])

  return (
    <MainLayout>
      <div className='flex gap-10 flex-col items-center'>
        <div className='text-5xl font-bold'>Our Menus</div>
        <div className='divider'></div>
        <div className='flex gap-10 flex-wrap justify-center'>
          {foods.map((food) => {
            return <FoodCard food={food} key={food.id} />
          })}
        </div>
      </div>
    </MainLayout>
  )
}
