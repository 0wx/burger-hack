/**
 * import { useEffect, useState } from 'react'
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

 */

import { useEffect, useState } from 'react'
import { api } from '../helpers/fetch'

export const useAdmins = () => {
  const [loading, setLoading] = useState(true)
  const [admins, setAdmins] = useState([])
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const { data: admins } = await api.get('/authors?_embed=items')

        setAdmins(admins)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchAdmins()
  }, [])

  return { admins, loading }
}
