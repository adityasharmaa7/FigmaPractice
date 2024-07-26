import React from 'react'
import './Navbar.css'
import Vector from '../../assets/Vector.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <div >
                <img src={Vector} alt="" className='image'/>
            </div>
            <p>IGSTUDIO</p>
        </div>
        <div className='navtext'>
            <div className='text'><p>Home</p></div>
            <div className='text'><p>Attorneys</p></div>
            <div className='text'><p>Practice Areas</p></div>
            <div className='text'><p>About Us</p></div>
        </div>
        <div className='contactButton'>
            <button >Contact Now</button>
        </div>
    </div>
  )
}

export default Navbar
