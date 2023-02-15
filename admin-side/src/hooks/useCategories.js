import { useEffect, useState } from 'react'
import { api } from '../helpers/fetch'

export const useCategories = () => {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categories } = await api.get('/categories?_embed=items')

        setCategories(categories)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading }
}
