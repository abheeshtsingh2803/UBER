import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1658744796948-b11ae1b52f3f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-16 ml-8' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" srcset="" />
            <div className='bg-white pb-4 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    )
}

export default Start