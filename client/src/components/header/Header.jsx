import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { useState } from 'react'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Header = () => {
  // SET DATE
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
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

  // OPTIONS FUNCTION
  const handleOption = (name, operation) => {
    setOptions(prevOptions => {
      return {
        ...prevOptions,
        [name]: operation === 'add' ? (options[name] + 1) : (options[name] - 1)
      }
    })
  }
  
  return (
    <div className='bg-sky-700 text-white flex justify-center relative z-10'>
        <div className={ 'container w-full mt-5 ' + ((useLocation().pathname === '/hotels') ? 'mb-0' : 'mb-24') }>
            <div className='flex gap-10 mb-12'>
              <div className='flex items-center gap-2.5 border border-white p-2.5 rounded-3xl bg-white bg-opacity-10'>
                <FontAwesomeIcon icon={ faBed } />
                <span>Stays</span>
              </div>
              
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faPlane } />
                <span>Flights</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faCar } />
                <span>Car Rentals</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faBed } />
                <span>Attractions</span>
              </div>
              <div className='flex items-center gap-2.5'>
                <FontAwesomeIcon icon={ faTaxi } />
                <span>Airport Taxis</span>
              </div>
            </div>

            { useLocation().pathname !== '/hotels' &&
              <>
                <h1 className='text-4xl font-bold'>A lifetime of discounts? It's Genius.</h1>
                <p className='my-5'>Get rewarded for your travels - unlock instant savings of 10% or more with a free BooKit account</p>

                <button className='bg-sky-400 text-white text-sm tracking-wider px-6 p-2.5 rounded-full shadow'>Sign In / Register</button>

                <div className='bg-white rounded-xl flex items-center justify-around p-2.5 absolute bottom-0 transform translate-y-1/2 w-full container shadow-md'>
                  <div className='flex items-center gap-2.5'>
                    <FontAwesomeIcon icon={ faBed } className='text-gray-400'/>
                    <input type="text" placeholder='Where are you going?' className='outline-none' />
                  </div>

                  <div className='flex items-center gap-2.5'>
                    <FontAwesomeIcon icon={ faCalendarDay } className='text-gray-400'/>
                    <span onClick={ () => setOpenDate(!openDate) } className='text-gray-400 cursor-pointer'>{ `${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}` }</span>

                    {
                      openDate &&
                      <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='absolute top-14 shadow-md'
                      />
                    }
                  </div>

                  <div className='flex items-center gap-2.5'>
                    <FontAwesomeIcon icon={ faPerson } className='text-gray-400'/>
                    <span onClick={ () => setOpenOptions(!openOptions) } className='text-gray-400 cursor-pointer'>{ `${ options.adult } adult • ${ options.children } children • ${ options.room } room` }</span>

                    {
                      openOptions &&
                      <div className='absolute top-14 bg-white text-gray-500 rounded-lg shadow-md'>
                        <div className='w-52 flex justify-between m-2.5'>
                          <span>Adult</span>

                          <div className='flex gap-3 items-center text-xs text-gray-800'>
                            <button disabled={ options.adult <= 1 } onClick={ () => handleOption('adult', 'minus') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>-</button>
                            <span>{ options.adult }</span>
                            <button onClick={ () => handleOption('adult', 'add') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>+</button>
                          </div>
                        </div>

                        <div className='w-52 flex justify-between m-2.5'>
                          <span>Children</span>

                          <div className='flex gap-3 items-center text-xs text-gray-800'>
                            <button disabled={ options.children < 1 } onClick={ () => handleOption('children', 'minus') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>-</button>
                            <span>{ options.children }</span>
                            <button onClick={ () => handleOption('children', 'add') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>+</button>
                          </div>
                        </div>

                        <div className='w-52 flex justify-between m-2.5'>
                          <span>Room</span>

                          <div className='flex gap-3 items-center text-xs text-gray-800'>
                            <button disabled={ options.room <= 1 } onClick={ () => handleOption('room', 'minus') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>-</button>
                            <span>{ options.room }</span>
                            <button onClick={ () => handleOption('room', 'add') } className='w-6 h-6 rounded border border-sky-500 text-sky-500 disabled:border-sky-300'>+</button>
                          </div>
                        </div>
                      </div>
                    }
                  </div>

                  <div>
                    <button className='bg-sky-400 text-white text-sm tracking-wider px-6 p-2.5 rounded-full shadow'>Search</button>
                  </div>
                </div>
              </>
            }
        </div>
    </div>
  )
}

export default Header