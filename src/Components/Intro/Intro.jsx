import React from 'react'
import './Intro.css'
import GiftImage from '../../assets/Gift 1.png'
import GridImage1 from '../../assets/gridimage1.png';
import GridImage2 from '../../assets/gridimage2.png';
import GridImage3 from '../../assets/gridimage3.png';
import GridImage4 from '../../assets/gridimage4.png';
import GridImage5 from '../../assets/gridimage5.png';
import GridImage6 from '../../assets/gridimage6.png';
import ReviewImage1 from '../../assets/Ellipse 14.png'
import ReviewImage2 from '../../assets/Ellipse 14 (1).png'
import ReviewImage3 from '../../assets/Ellipse 14 (2).png'
 
function Intro() {
  return ( <>
    <div className='intro'>
      <div className='child1'>
        <span>
        Let’s Introduce <br /> Ourself
        </span>
      </div>
      <div className='vertical'></div>
      <div className='child2'>
        <h3>Criminal Lawyer</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
    <div className='secondIntro'>
        <h1>Why Choose us?</h1>
        <div className='giftBox'>
            <div className='box'>
                <div className='imagediv'>
                    <img src={GiftImage} alt="" />
                </div>
                <span className='titletext'>98% Success Rate</span><br />
                <p className='paratext'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequatduis enim velit mollit Exer.
                </p>
                <button className='readMoreButton'>
                Read More
                </button>
            </div>
            <div className='box' style={{background: "#2E2E2E"}}>
            <div className='imagediv'>
                    <img src={GiftImage} alt="" />
                </div>
                <span className='titletext'>100% Success Rate</span><br />
                <p className='paratext'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequatduis enim velit mollit Exer.
                </p>
                <button className='readMoreButton'>
                Read More
                </button>
            </div>
            <div className='box'>
            <div className='imagediv'>
                    <img src={GiftImage} alt="" />
                </div>
                <span className='titletext'>100% Success Rate</span><br />
                <p className='paratext'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequatduis enim velit mollit Exer.
                </p>
                <button className='readMoreButton'>
                Read More
                </button>
            </div>
        </div>
    </div>
    <div className='gridSection'>
        <h1>Area of Practices</h1>
        <div className='grid'>
            <div className='imgContainer1'>
                <img src={GridImage1} alt="" />
                <span id='one'>BUSINESS LAW</span>
            </div>
            <div className='imgContainer2'> 
                <img src={GridImage2} alt="" />
                <span id='two'> Partnership LAW</span>
            </div>
        </div>
        <div className='grid'>
            <div className='imgContainer3'>
                <img src={GridImage3} alt="" />
                <span id='three'>REAL ESTATE LAW</span>
            </div>
            <div className='imgContainer4'>
                <img src={GridImage4} alt="" />
                <span id='four'>BUSINESS LAW</span>
            </div>
        </div>
        <div className='grid'>
            <div className='imgContainer5'>
                <img src={GridImage5} alt="" />
                <span id='five'>LANDLORD DISPUTES</span>
            </div>
            <div className='imgContainer6'>
                <img src={GridImage6} alt="" />
                <span id='six'>ELDER ABUSE</span>
            </div>
        </div>
    </div>
    <div className='clientTitelBox'> 
        <span className='clientTitel'>What says our <br />
        happy Clients</span>
    </div>
    
    <div className='reviewSection'>
         <div className='reviewBox'>
            <img src={ReviewImage1} alt="" />
            <span className='nametitel'>Jane Cooper</span>
            <br />
            <span className='innertitle'>
            Ceo of Hunt
            </span>
            <p className='review'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequatduis enim velit mollit Exer.
            sit aliqua dolor do amet sint. Velit officia
            </p>
        </div>
        <div className='reviewBox' style={{background: "#2E2E2E"}}>
            <img src={ReviewImage2} alt="" />
            <span className='nametitel'>Devon Lane</span>
            <br />
            <span className='innertitle'>
            Ceo of Hunt
            </span>
            <p className='review'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequatduis enim velit mollit Exer.
            sit aliqua dolor do amet sint. Velit officia
            </p>
        </div>
        <div className='reviewBox' >
            <img src={ReviewImage3} alt="" />
            <span className='nametitel'>Robert Fox</span>
            <br />
            <span className='innertitle'>
            Ceo of Hunt
            </span>
            <p className='review'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequatduis enim velit mollit Exer.
            sit aliqua dolor do amet sint. Velit officia
            </p>
        </div>
    </div>
    </>
  )
}

export default Intro
