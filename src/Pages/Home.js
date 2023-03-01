import React from 'react'
import "../Styles/Home.css"

// import myPic from '../Assets/IMG_4760.png'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        {/* <img class="myPic" src={myPic}/> */}
        <h2> Hey, I'm Juan Molina. </h2>
        <div className='prompt'>

          <p>
            I'm Fullstack developer, and Lifelong learner. I was originally born in El-Salvador and moved to the United States in 2003. After graduating highschool, I began attending Broward College persuing a biology degree, but along the way, I found a passion for computers and decided give coding a shot! Turns out that I love it!!! Thanks for visiting my portfolio, and I hope you Stay a while.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Home