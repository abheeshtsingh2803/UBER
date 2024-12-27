import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e)=> {
        e.preventDefault();
        
        const userData = {
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,
            userData
        )    

        if(response.status == 200) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }

        setEmail(' ')
        setpassword(' ')
    }
    return (
        <div className='p-8 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
                <form onSubmit={(e) =>{
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
                    <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
            </div>
            <div>
                <Link
                to='/captain-login'
                className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin