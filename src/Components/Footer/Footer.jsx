import React from 'react'
import Vector from '../../assets/Vector.png'
import './Footer.css';
import insta from '../../assets/Icon.png'
import fb from '../../assets/Icon (1).png'
import twitter from '../../assets/Icon (2).png'
import pintrest from '../../assets/Icon (3).png'
function Footer() {
  return (
    <div className='outerfooter'>
        <div className='Footer'> 
        <div className='logo'>
                <div >
                    <img src={Vector} alt="" className='image'/>
                </div>
                <p>IGSTUDIO</p>
            </div>
            <div className='footertext'>
                <div className='text'><p>Home</p></div>
                <div className='text'><p>Attorneys</p></div>
                <div className='text'><p>Practice Areas</p></div>
                <div className='text'><p>About Us</p></div>
            </div>
            <div className='handles'>
                <img src={insta} alt=""  style={{position:"relative",right:"55%"}}/>
                <img src={fb} alt=""  style={{position: "relative",right: "35%"}}/>
                <img src={twitter} alt="" style={{position: "relative",right: "18%"}}/>
                <img src={pintrest} alt="" />
            </div>
        </div>
        <div className='last'>
            <p>© 2020 Acme. All rig</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
    </div>
  )
}

export default Footer
