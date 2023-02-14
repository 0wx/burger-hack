import { useEffect, useState } from 'react'

export const useStatistics = () => {
  const [loading, setLoading] = useState(true)
  const [statistics, setStatistics] = useState({ items: [], categories: [] })
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const items = await (await fetch('http://localhost:3000/items')).json()
        const categories = await (
          await fetch('http://localhost:3000/categories')
        ).json()

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
