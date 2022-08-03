import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Errorpage = () => {


    const history = useNavigate();

    const navigate = () => {
        history("/");
    }


    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <img src="./404.png" style={{ width: "400px" }} alt="" className='mt-5' />
            <h3>Opps ! Page not found</h3>
            <button className='btn btn-primary mt-3' style={{ width: "310px" }} onClick={() => navigate()}>goto Home Page</button>
        </div>
    )
}

export default Errorpage
