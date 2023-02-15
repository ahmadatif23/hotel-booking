import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi, faToriiGate } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { useContext, useState } from 'react'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { SearchContext } from '../../context/SearchContext.js'

const Header = () => {
  // SET DATE
  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  // SET OPTIONS
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  // DECLARE NAVIGATE
  const navigate = useNavigate()

  // OPTIONS FUNCTION
  const handleOption = (name, operation) => {
    setOptions(prevOptions => {
      return {
        ...prevOptions,
        [name]: operation === 'add' ? (options[name] + 1) : (options[name] - 1)
      }
    })
  }

  // USE SEARCH CONTEXT
  const { dispatch } = useContext(SearchContext)

  // GO TO ROUTE ON SEARCH
  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } })
    navigate('/hotels', { state: {destination, dates, options  } })
  }
  
  return (
    <div className='bg-sky-700 text-white flex justify-center relative z-10 md:px-0 px-2.5'>
        <div className={ 'container w-full mt-5 ' + ((useLocation().pathname === '/') ? 'mb-24' : 'mb-0') }>
            <div className='flex gap-10 mb-12'>
              <div className='flex items-center gap-2.5 border border-white p-2.5 rounded-3xl bg-white bg-opacity-10'>
                <FontAwesomeIcon icon={ faBed } />
                <span className='md:block hidden'>Stays</span>
              </div>
              
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faPlane } />
                <span className='md:block hidden'>Flights</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faCar } />
                <span className='md:block hidden'>Car Rentals</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faToriiGate } />
                <span className='md:block hidden'>Attractions</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faTaxi } />
                <span className='md:block hidden'>Airport Taxis</span>
              </div>
            </div>

            { useLocation().pathname === '/' &&
              <>
                <h1 className='md:text-4xl text-3xl font-bold'>A lifetime of discounts? It's Genius.</h1>
                <p className='my-5 text-sm md:text-base'>Get rewarded for your travels - unlock instant savings of 10% or more with a free BooKit account</p>

                <button className='bg-sky-400 text-white text-sm tracking-wider px-6 p-2.5 rounded-full shadow'>Sign In / Register</button>

                <div className='bg-white rounded-xl flex md:flex-row flex-col items-center justify-around p-2.5 absolute bottom-0 transform translate-y-1/2 w-full container shadow-md text-sm'>
                  <div className='flex flex-1 justify-center items-center gap-2.5'>
                    <FontAwesomeIcon icon={ faBed } className='text-gray-400'/>
                    <input onChange={ e => setDestination(e.target.value) } type="text" placeholder='Where are you going?' className='outline-none text-gray-800' />
                  </div>

                  <div className='flex flex-1 justify-center items-center gap-2.5'>
                    <FontAwesomeIcon icon={ faCalendarDay } className='text-gray-400'/>
                    <span onClick={ () => setOpenDate(!openDate) } className='text-gray-400 cursor-pointer'>{ `${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}` }</span>

                    {
                      openDate &&
                      <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className='absolute top-14 shadow-md'
                      />
                    }
                  </div>

                  <div className='flex flex-1 justify-center items-center gap-2.5'>
                    <FontAwesomeIcon icon={ faPerson } className='text-gray-400'/>
                    <span onClick={ () => setOpenOptions(!openOptions) } className='text-gray-400 cursor-pointer'>{ `${ options.adult } adult • ${ options.children } children • ${ options.room } room` }</span>

                    {
                      openOptions &&
                      <div className='absolute top-14 bg-white text-gray-500 rounded-lg shadow-md'>
                        <div className='w-52 flex justify-between m-2.5'>
                          <span>Adult</span>

                          <div className='flex gap-3 items-center text-xs text-gray-800'>
                            <button disabled={ options.adult <= 1 } onClick={ () => handleOption('adult', 'minus') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>-</button>
                            <span className='w-4 flex items-center justify-center'>{ options.adult }</span>
                            <button onClick={ () => handleOption('adult', 'add') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>+</button>
                          </div>
                        </div>

                        <div className='w-52 flex justify-between m-2.5'>
                          <span>Children</span>

                          <div className='flex gap-3 items-center text-xs text-gray-800'>
                            <button disabled={ options.children < 1 } onClick={ () => handleOption('children', 'minus') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>-</button>
                            <span className='w-4 flex items-center justify-center'>{ options.children }</span>
                            <button onClick={ () => handleOption('children', 'add') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>+</button>
                          </div>
                        </div>

                        <div className='w-52 flex justify-between m-2.5'>
                          <span>Room</span>

                          <div className='flex gap-3 items-center text-xs text-gray-800'>
                            <button disabled={ options.room <= 1 } onClick={ () => handleOption('room', 'minus') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>-</button>
                            <span className='w-4 flex items-center justify-center'>{ options.room }</span>
                            <button onClick={ () => handleOption('room', 'add') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>+</button>
                          </div>
                        </div>
                      </div>
                    }
                  </div>

                  <div>
                    <button onClick={ handleSearch } className='bg-sky-400 text-white text-sm tracking-wider px-6 p-2.5 rounded-full shadow'>Search</button>
                  </div>
                </div>
              </>
            }
        </div>
    </div>
  )
}

export default Header