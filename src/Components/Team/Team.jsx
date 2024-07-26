import React from 'react'
import './Team.css';
import Person1 from '../../assets/Ellipse 15.png'
import Person2 from '../../assets/Ellipse 16.png'
import Person3 from '../../assets/Ellipse 15 (1).png'
import Person4 from '../../assets/Ellipse 15 (2).png'
import Person5 from '../../assets/Ellipse 15 (3).png'
import Person6 from '../../assets/Ellipse 15 (4).png'

function Team() {
  return (
    <div className='teamPage'>
        <span className='title'>
        Our Team
        </span>
        <div className='members'>
            <div className='person'>
                <img src={Person1} alt="" />
                <div>
                    <span>Danial Def</span>
                    <p>301 Cases</p>
                </div>
            </div>
            <div className='person' style={{background: "#E3B748"}}>
            <img src={Person2} alt="" />
                <div>
                    <span>Sanfole</span>
                    <p>850 Cases</p>
                </div>
            </div>
            <div className='person'>
            <img src={Person3} alt="" />
                <div>
                    <span>Cesforila</span>
                    <p>470 Cases</p>
                </div>
            </div>
        </div>
        <div className='members'>
            <div className='person'>
            <img src={Person4} alt="" />
                <div>
                    <span>Colleen</span>
                    <p>180 Cases</p>
                </div>
            </div>
            <div className='person'>
            <img src={Person5} alt="" />
                <div>
                    <span>Haldone</span>
                    <p>212 Cases</p>
                </div>
            </div>
            <div className='person'>
            <img src={Person6} alt="" />
                <div>
                    <span>Nik Jeo</span>
                    <p>350 Cases</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Team
