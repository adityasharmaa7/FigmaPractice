import React from 'react'
import Email from '../../assets/Message 35.png'
import HeroImage from '../../assets/Group 10591.png'
import './Hero.css'
function Hero() {
  return (
    <div className='wrapper'>
      <div className='heroText'>
        <span className='titeText'>
            You don’t have to <br />
            <span >
            Fight them Alone.
            </span>
        </span>
        <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, 
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, 
            hac massa gravida arcu interdum proin curae.
        </p>
        <div className='heroinput'>
            <img src={Email}/>
            <input type="search" name="" id="" placeholder='Enter your eamil address'/>
            <button>Let’s Talk</button>
        </div>
      </div>
      <div className='heroImage'>
        <img src={HeroImage}/>
      </div>
    </div>
  )
}

export default Hero
