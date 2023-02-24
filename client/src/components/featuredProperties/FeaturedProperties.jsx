import useFetch from '../../hooks/useFetch.js'
import defaultPhoto from '../../default.png'

const FeaturedProperties = () => {
  const { data, loading } = useFetch('hotels/?featured=true&limit=4')

  return (
    <div className="w-full container flex md:flex-row flex-col justify-between gap-5">
      {
        loading ? "Loading, please wait" :
        (
          <>
            {
              data && data.map((item, i) => (
                <div key={ item._id } className="flex-1 md:gap-2.5 gap-1 flex flex-col">
                  <img
                    src={ item.photos[0] ? item.photos[0] : defaultPhoto }
                    alt=""
                    className="w-100 h-60 object-cover rounded-lg"
                  />

                  <span className="text-slate-700 font-bold">{ item.name }</span>
                  <span className="font-light capitalize">{ item.city }</span>
                  <span className="font-medium">Starting from ${ item.cheapestPrice }</span>

                  {
                    item.rating &&
                    <div className="flex items-center gap-1">
                      <button className="bg-sky-900 text-white p-1 mr-2.5 font-bold text-xs rounded">{ item.rating }</button>
                      <span className="text-sm">Excellent</span>
                    </div>
                  }
                </div>
              ))
            }
          </>
        )
      }
    </div>
  )
}

export default FeaturedProperties