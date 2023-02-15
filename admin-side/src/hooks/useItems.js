import { useEffect, useState } from 'react'

export const useItems = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  useEffect(() => {
    const fetchitems = async () => {
      try {
        const items = await (await fetch('http://localhost:3000/items?_expand=category&_embed=ingredients')).json()

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
