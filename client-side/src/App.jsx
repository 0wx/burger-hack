import MainLayout from './components/layouts/MainLayout'
import { useState, useEffect } from 'react'
import FoodCard from './components/molecules/FoodCard'

function App() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/items')
        const data = await response.json()

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
      {foods.map((food) => {
        return <FoodCard food={food} />
      })}
    </MainLayout>
  )
}

export default App
