import React from 'react'
import './Navbar.css'
import Selection from './Selection'
import { BsFillBrightnessHighFill } from "react-icons/bs";
import Profile from './Photo';

function Navbar() {
    const API = [1, 2, 3, 4, 5, 6];
    return (
        <div className='container'>
            <div className='leftconer'>
                <BsFillBrightnessHighFill className='ln' style={{fontSize:'20',}}/>
                <Selection className='ln' />
                <div className='ln'>11/1/2023 | Wednesday</div>
            </div>

            <div className='center'>
                <h1>STOREMATE</h1>
            </div>

            <div className='rightconer'>
                {API.map((item, index) => (
                    <Profile />
                ))}

                <div>Attanayaka</div>

                <Profile/>
                
            </div>

        </div>
    )
}

export default Navbar