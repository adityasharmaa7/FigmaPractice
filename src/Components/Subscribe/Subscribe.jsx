import React from 'react'
import './Subscribe.css'
function Subscribe() {
  return (
    <div className='outerBox'>
        <div className='innerBox'>
            <h1>Subscribe Our Newsletter</h1>
            <div className='inputBox'>
                <input type="text" placeholder='Name :'/>
                <input type="text" placeholder='Enter your Email'/>
                <button>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
