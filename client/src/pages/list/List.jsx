import { useState } from "react"
import { useLocation } from "react-router-dom"
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full container flex gap-5">
        <div className="flex-1 bg-yellow-400 p-2.5 rounded-lg sticky top-2.5 h-max">
          <h1 className="text-xl text-gray-500 mb-2.5">Search</h1>

          <div className="flex flex-col gap-1 mb-2.5">
            <label className="text-xs">Destination</label>
            <input placeholder={destination} type="text" className="h-7 border-0 p-1" />
          </div>

          <div className="flex flex-col gap-1 mb-2.5">
            <label className="text-xs">Check-in Date</label>

            <span onClick={() => setOpenDate(!openDate)} className="h-7 p-1 bg-white flex items-center cursor-pointer">
              {`${format( date[0].startDate, "MM/dd/yyyy" )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>

            {
              openDate &&
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            }
          </div>

          <div className="flex flex-col gap-1 mb-2.5">
            <label className="text-xs">Options</label>

            <div className="lsOptions p-2.5">
              <div className="lsOptionItem flex justify-between mb-2.5 text-gray-500 text-xs">
                <span className="lsOptionText"> Min price <small>per night</small> </span>
                <input type="number" className="lsOptionInput w-12" />
              </div>

              <div className="lsOptionItem flex justify-between mb-2.5 text-gray-500 text-xs">
                <span className="lsOptionText"> Max price <small>per night</small> </span>
                <input type="number" className="lsOptionInput w-12" />
              </div>

              <div className="lsOptionItem flex justify-between mb-2.5 text-gray-500 text-xs">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className="lsOptionInput w-12" placeholder={options.adult} />
              </div>

              <div className="lsOptionItem flex justify-between mb-2.5 text-gray-500 text-xs">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="lsOptionInput w-12" placeholder={options.children} />
              </div>

              <div className="lsOptionItem flex justify-between mb-2.5 text-gray-500 text-xs">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} className="lsOptionInput w-12" placeholder={options.room} />
              </div>
            </div>
          </div>

          <button className="p-2.5 bg-sky-600 text-white w-full font-medium rounded-lg">Search</button>
        </div>

        <div className="listResult flex-[3]">
          
        </div>
      </div>
    </div>
  )
}

export default List