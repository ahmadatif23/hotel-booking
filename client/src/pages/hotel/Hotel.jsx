import { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch.js'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import Mailist from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { SearchContext } from '../../context/SearchContext.js'

const Hotel = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const { data, loading } = useFetch(`/hotels/find/${ id }`)

  const { dates, options } = useContext(SearchContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    return diffDays
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <>
      {
        loading ? "Loading, please wait" :
        (
          <>
            <div className='hotelContainer flex flex-col items-center gap-7'>
              {
                open &&
                <div className='slider sticky top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-[999] flex items-center'>
                  <FontAwesomeIcon icon={ faCircleXmark } className="close absolute top-5 right-5 text-3xl text-gray-300 cursor-pointer" onClick={() => setOpen(false)} />
                  <FontAwesomeIcon icon={ faCircleArrowLeft } className="arrow m-5 text-5xl text-gray-300 cursor-pointer" onClick={() => handleMove("l")} />

                  <div className="sliderWrapper w-full h-full flex justify-center items-center">
                    <img src={ data.photos[slideNumber] } alt="" className="sliderImg w-4/5 h-[80vh]" />
                  </div>

                  <FontAwesomeIcon icon={ faCircleArrowRight } className="arrow m-5 text-5xl text-gray-300 cursor-pointer" onClick={() => handleMove("r")} />
                </div>
              }

              <div className="hotelWrapper w-full container flex flex-col gap-2.5 relative mt-5">
                <h1 className="hotelTitle text-2xl">{ data.name }</h1>

                <div className="hotelAddress text-xs flex items-center gap-2.5">
                  <FontAwesomeIcon icon={ faLocationDot }/>
                  <span>{ data.address }</span>
                </div>

                <span className="hotelDistance text-sky-500 font-medium">
                  Excellent location – { data.distance }m from center
                </span>

                <span className="hotelPriceHighlight text-green-600 font-medium">
                  Book a stay over ${ data.cheapestPrice } at this property and get a free airport taxi
                </span>

                <div className="hotelImages flex flex-wrap justify-between -m-1">
                  {
                    data.photos?.map((photo, i) => (
                      <div className="hotelImgWrapper w-1/3 p-1" key={i}>
                        <img onClick={ () => handleOpen(i) } src={photo} alt="" className="hotelImg w-full object-cover cursor-pointer rounded hover:scale-[1.01] transition-all duration-300" />
                      </div>
                    ))
                  }
                </div>

                <div className="hotelDetails flex justify-between gap-5 mt-5">
                  <div className="hotelDetailsTexts flex-[3]">
                    <h1 className="hotelTitle text-2xl">{ data.title }</h1>

                    <p className="hotelDesc text-sm mt-5">
                      { data.desc }
                    </p>
                  </div>

                  <div className="hotelDetailsPrice flex-1 bg-gray-100 p-5 flex flex-col gap-5 rounded-lg">
                    <h1 className='text-lg text-gray-600'>Perfect for a { days }-night stay!</h1>

                    <span className='text-sm'>
                      Located in the real heart of Krakow, this property has an
                      excellent location score of 9.8!
                    </span>
                    
                    <h2 className='font-light'> <b>${ days * data.cheapestPrice * options.room }</b> ({ days } nights) </h2>

                    <button className='px-2.5 py-5 bg-sky-600 text-white font-bold rounded-md'>Reserve or Book Now!</button>
                  </div>
                </div>
              </div>

            </div>
          </>
        )
      }

      <div className='flex flex-col items-center gap-7'>
        <Mailist />
        <Footer />
      </div>
    </>
  )
}

export default Hotel