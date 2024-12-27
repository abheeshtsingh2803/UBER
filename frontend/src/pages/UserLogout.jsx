import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UserLogout = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }).catch(err => {
        console.log(err)
    })

    return (
        <div>
            UserLogout
        </div>
    )
}

export default UserLogout