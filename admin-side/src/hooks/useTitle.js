import { useEffect, useState } from 'react'

export const useTitle = (_title) => {
  const [title, _setTitle] = useState(
    _title ? _title + ' - Burger Hack Admin' : 'Burger Hack Admin'
  )
  useEffect(() => {
    document.title = title
  }, [title])

  const setTitle = (title) => {
    if (typeof title === 'function') {
      _setTitle(title)
      return
    }
    _setTitle(title + ' - Burger Hack Admin')
  }
  return { title, setTitle }
}
