import { useEffect, useState } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import FoodCard from '../components/molecules/FoodCard'
import { api } from '../helpers/fetch'

export default function Menu() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/items?_expand=category')

        setFoods(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

    return () => {
      setFoods([])
    }
  }, [])
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
