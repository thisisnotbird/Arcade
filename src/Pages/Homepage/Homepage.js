import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import statues from '../../assets/statues.png'
import './Homepage.module.css'

function Homepage() {
    return (
        <div>
           <Navbar/> 
            <img src={statues} alt="Arcade" />
        </div>
    ) 
}

export default Homepage
