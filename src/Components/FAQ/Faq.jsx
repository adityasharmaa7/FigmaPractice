import React from 'react'
import './Faq.css';
function Faq() {
  return (
    <div className='grandParent'>
            <div className='parent'>
                <div className='child'>
                    <h1>FAQ</h1>
                    <p style={{width:"557px",height:"58px",}}>Amet minim mollit non deserunt ullamco 
                        est sit <br />aliqua dolor do amet sint.</p>
                </div>
                <div className='child'>
                    <div className='childContainer'>
                        <div className='grandChild'>
                            <h3>Do I need a personal injury report?</h3>
                            <p style={{width:"557px",height:"145px",}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                                do amet sint. Velit officia consequatduis enim velit mollit Exer.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                Velit officia consequatduis enim velit mollit Exer.</p>
                        </div>
                        <div className='grandChild' style={{display:"flex"}}>
                            <h3>How much is my case worth?</h3>
                            <div><p style={{margin:"0%",fontWeight:"900",fontSize:"35px",color:"black",opacity:"100%",position:"relative",left:"4px"}}>+</p></div>
                        </div>
                        <div className='grandChild' style={{display:"flex"}}>
                            <h3>What should I do right after car accidect</h3>
                            <div><p style={{margin:"0%",fontWeight:"900",fontSize:"35px",color:"black",opacity:"100%" ,position:"relative",left:"4px"}}>+</p></div>
                        </div>
                        <div className='grandChild' style={{display:"flex"}}>
                            <h3>How much is my case worth?</h3>
                            <div><p style={{margin:"0%",fontWeight:"900",fontSize:"35px",color:"black",opacity:"100%" ,position:"relative",left:"4px"}}>+</p></div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Faq
