import axios from 'axios'

import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        dispatch({ type: 'LOGIN_START' })

        try {
            const res = await axios.post('/auth/login', credentials)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
            navigate('/')
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
        }
    }

    return (
        <div className="login h-screen w-full flex items-center justify-center">
            <div className="lContainer container max-w-md flex flex-col gap-2.5">
                <input onChange={ handleChange } type="text" placeholder="username" id="username" className="lInput border rounded-md h-8 p-2.5" />
                <input onChange={ handleChange } type="password" placeholder="password" id="password" className="lInput border rounded-md h-8 p-2.5" />

                <button onClick={ handleClick } disabled={ loading } className="lButton py-2.5 px-5 bg-sky-600 text-white font-bold rounded-md disabled:bg-sky-800 cursor-not-allowed">
                    Login
                </button>

                { error && <span>{ error.message }</span> }
            </div>
        </div>
    )
}

export default Login