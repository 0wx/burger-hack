import { useEffect, useState } from 'react'

export const useTitle = (_title = 'Burger Hack') => {
  const [title, _setTitle] = useState(_title)
  useEffect(() => {
    document.title = title
  }, [title])

  const setTitle = (title) => {
    if (typeof title === 'function') {
      _setTitle(title)
      return
    }
    _setTitle(title + ' - Burger Hack')
  }
  return { title, setTitle }
}
