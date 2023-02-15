import { useEffect, useState } from 'react'
import { api } from '../helpers/fetch'

export const useStatistics = () => {
  const [loading, setLoading] = useState(true)
  const [statistics, setStatistics] = useState({ items: [], categories: [] })
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const { data: items } = await api.get('/items')
        const { data: categories } = await api.get('/categories')

        setStatistics({ items, categories })
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchStatistics()
  }, [])

  return { statistics, loading }
}
