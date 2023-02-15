import useFetch from "../../hooks/useFetch.js"

const Featured = () => {
  const { data, loading } = useFetch('hotels/countByCity?cities=berlin,madrid,london')

  return (
    <div className="w-full container flex md:flex-row flex-col justify-between md:gap-5 gap-2.5 z-0 md:px-0 px-2.5">
      {
        loading ? "Loading, please wait" :
        (
          <>
            <div className="relative text-white overflow-hidden rounded-lg h-60 group cursor-pointer">
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent group-hover:from-transparent"></div>

              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
                className="w-full object-cover"
              />

              <div className="absolute bottom-5 left-5">
                <h1 className="text-xl font-semibold">Berlin</h1>
                <h2 className="text-lg">{ data[0] } properties</h2>
              </div>
            </div>
            
            <div className="relative text-white overflow-hidden rounded-lg h-60 group cursor-pointer">
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent group-hover:from-transparent"></div>

              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                alt=""
                className="w-full object-cover"
              />

              <div className="absolute bottom-5 left-5">
                <h1 className="text-xl font-semibold">Madrid</h1>
                <h2 className="text-lg">{ data[1] } properties</h2>
              </div>
            </div>

            <div className="relative text-white overflow-hidden rounded-lg h-60 group cursor-pointer">
              <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent group-hover:from-transparent"></div>

              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                alt=""
                className="w-full object-cover"
              />

              <div className="absolute bottom-5 left-5">
                <h1 className="text-xl font-semibold">London</h1>
                <h2 className="text-lg">{ data[2] } properties</h2>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Featured