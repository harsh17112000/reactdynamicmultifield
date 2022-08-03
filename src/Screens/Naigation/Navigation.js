import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { Route, Routes} from "react-router-dom"
import Errorpage from '../Errorpage'
import Usersdata from '../Register/Usersdata'

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account/register" element={<Register />} />
            <Route path="/userdata" element={<Usersdata />} />
            <Route path='*' element={<Errorpage />} />
        </Routes>
    )
}

export default Navigation;
