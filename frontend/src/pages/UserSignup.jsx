import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    
    const { user, setUser } = useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,
            newUser
        )

        if (response.status === 201) {
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }


        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')

    }

    return (
        <div className='p-8 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>

                    <h3 className='text-base font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-2 mb-6'>
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                            type="text"
                            placeholder='First name'
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm'
                            type="text"
                            placeholder='Last name'
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                        />
                    </div>
                    <h3 className='text-base font-medium mb-2'>What's your email</h3>
                    <input
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                        required
                        value={email}
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <h3 className='text-base mb-2'>Enter password</h3>
                    <input
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        value={password}
                        type="password"
                        placeholder='password'
                        onChange={(e) => [
                            setPassword(e.target.value)
                        ]}
                    />
                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Create account</button>
                </form>
                <p className='text-center'>Already have an accounr? <Link to='/login' className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
                <p className='text-[8px] leading-tight'>
                    This site is protected by reCAPTACHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
                </p>
            </div>
        </div>
    )
}

export default UserSignup