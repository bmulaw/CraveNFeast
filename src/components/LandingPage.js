import React from 'react'
import './LandingPage.css';
import CFVideo from "../media/CFVideo.mp4"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className='landingpage'>
     <section  className='landing-container'>
      <video src={CFVideo} autoPlay muted loop='true' className='video-cf'/>
      </section>
      <section className='cf-overlay'></section>
      
      <section className='home-text'>
      
      <h1 className='landing-h1'>Welcome</h1>
      <p>About Crave and Feast</p>
      
     </section>
     <Link to="/register" className='link-btn'><button className='landing-home-btn'>Explore</button></Link>
    
    </main>
    
  )
}

export default LandingPage