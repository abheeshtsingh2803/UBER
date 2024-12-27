import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        const Captain = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, 
            Captain
        )

        if(response.status == 200) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }
        
        setEmail(' ')
        setpassword(' ')
    }
    return (
        <div className='p-8 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        className='bg-[#eeeeee] mb-8 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                    />
                    <h3 className='text-xl mb-2'>Enter password</h3>
                    <input
                        className='bg-[#eeeeee] mb-8 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        type="password"
                        placeholder='password'
                    />
                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
                </form>
                <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
            </div>
            <div>
                <Link
                    to='/login'
                    className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin