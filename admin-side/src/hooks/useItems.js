import { useEffect, useState } from 'react'
import { api } from '../helpers/fetch'

export const useItems = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchitems = async () => {
      try {
        const { data: items } = await api.get(
          '/items?_expand=category&_embed=ingredients'
        )

        setItems(items)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchitems()
  }, [])

  return { items, loading }
}
