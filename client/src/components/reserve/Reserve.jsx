import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useFetch from "../../hooks/useFetch.js";
import { SearchContext } from '../../context/SearchContext.js'

const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([])
    const { data, loading, error } = useFetch(`/hotels/room/${ hotelId }`)
    const { dates } = useContext(SearchContext)

    const navigate = useNavigate()

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value

        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value))
    }

    const handleClick = async () => {
        
        try {
            await Promise.all(selectedRooms.map((roomId) => {
                const res = axios.put(`/rooms/availability/${ roomId }`, { dates: allDates })
                return res.data
            }))

            setOpen(false)
            navigate('/')
        } catch (err) {

        }
    }

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)

        const date = new Date(start.getTime())

        let list = []

        while(date <= end) {
            list.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return list
    }

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) => 
            allDates.includes(new Date(date).getTime())
        )

        return !isFound
    }

    return (
        <div className="reserve w-screen h-screen bg-black bg-opacity-40 fixed top-0 left-0 flex items-center justify-center">
            <div className="rContainer bg-white p-5 relative rounded-lg">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose absolute top-2 right-2 cursor-pointer" onClick={() => setOpen(false)} />
                
                <span>Select your rooms:</span>

                {data.map((item) => (
                    <div className="rItem w-full justify-between flex items-center gap-12 p-5" key={item._id}>
                        <div className="rItemInfo flex flex-col gap-1">
                            <div className="rTitle font-medium">{item.title}</div>
                            <div className="rDesc font-light">{item.desc}</div>

                            <div className="rMax text-xs">
                                Max people: <b>{item.maxPeople}</b>
                            </div>

                            <div className="rPrice font-medium">${item.price}</div>
                        </div>

                        <div className="rSelectRooms flex flex-wrap gap-1 text-[8px] text-gray-500">
                            {item.roomNumbers.map((roomNumber) => (
                                <div key={ roomNumber.number } className="room flex flex-col">
                                    <label>{roomNumber.number}</label>
                                    <input onChange={ handleSelect } type="checkbox" value={roomNumber._id} disabled={ !isAvailable(roomNumber) } />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <button onClick={ handleClick } className="rButton px-5 py-2.5 bg-sky-600 text-white font-bold rounded-md w-full mt-5">
                    Reserve Now!
                </button>
            </div>
        </div>
    )
}

export default Reserve