import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'

const Navbar = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="bg-sky-700 flex items-center justify-center">
        <div className="container flex items-center justify-between py-4 md:px-0 px-2.5">
            <Link to='/'>
              <span className="text-white tracking-widest md:text-3xl text-2xl font-bold">BooKit</span>
            </Link>
            
            {
              user ? <div className='text-white font-semibold'>{ user.username }</div> :
              (
                <div className="flex gap-2">
                  <button className="px-4 py-2.5 rounded-md bg-white text-sky-800 tracking-wider text-sm">Register</button>
                  <button className="px-4 py-2.5 rounded-md bg-white text-sky-800 tracking-wider text-sm">Login</button>
                </div>
              )
            }
        </div>
    </div>
  )
}

export default Navbar