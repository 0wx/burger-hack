import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartIcon from '../components/atoms/CartIcon'
import MainLayout from '../components/layouts/MainLayout'
import { api } from '../helpers/fetch'

export default function Detail() {
  const { id } = useParams()
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    api
      .get(`/items/${id}?_expand=category&_expand=author&_embed=ingredients`)
      .then(({ data }) => setDetail(data))
  }, [id])

  return (
    <MainLayout title="Detail" className="flex flex-col items-center">
      {detail && (
        <>
          <div className="h-80 bg-secondary w-full"></div>
          <div className="-translate-y-72">
            <div className="avatar hover:scale-125 transition-all">
              <div className="w-96 aspect-square">
                <img src={detail.imgUrl} alt="borgor" />
              </div>
            </div>
            <div className="flex flex-col items-center max-w-sm">
              <div className="text-3xl font-extrabold">{detail.name}</div>
              <div className="text-xl font-extrabold">Rp. {detail.price}</div>

              <div className="mt-4 text flex items-center justify-center text-center max-w-xs">
                {detail.description}
              </div>

              <div className="font-bold my-4">Ingreditents</div>
              <div className="">
                {detail.ingredients.map((ingredient) => (
                  <div key={ingredient.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div>{ingredient.name}</div>
                  </div>
                ))}
              </div>
              <div className="divider"></div>
              <div className="mt-4 flex gap-2 w-36 bg-accent justify-center py-2 px-2 rounded-lg text-sm items-center font-bold cursor-pointer hover:bg-accent-focus">
                <CartIcon /> Add to Cart
              </div>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  )
}
