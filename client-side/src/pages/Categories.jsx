import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCategories,
  resetCategories,
} from '../stores/actions/actionCreator'
import MainLayout from '../components/layouts/MainLayout'

export default function Categories() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categories)

  useEffect(() => {
    dispatch(fetchCategories())
    return () => {
      dispatch(resetCategories())
    }
  }, [dispatch])

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="text-5xl font-bold">Categories</div>
        <div className="divider"></div>
        <div className="w-full max-w-lg rounded-full flex flex-wrap items-center justify-center">
          {categories.map((cat, i) => {
            const fontSize = Math.max(
              Math.min(cat.items.length * 5 + 14, 40),
              18
            )
            return (
              <div
                className="px-2 h-min hover:scale-125 transition-all cursor-pointer tooltip"
                style={{
                  fontSize,
                }}
                data-tip={`${cat.items.length} Items`}
                key={i}
              >
                {cat.name}
              </div>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}
