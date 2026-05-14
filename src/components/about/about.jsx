import React from 'react'
import './about.css'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about} alt="Inside Zara Therapy Clinic" />
      </div>
      <div className='about-right'>
        <div className='about-block'>
          <h3>Our History</h3>
          <p>Zara Therapy Clinic was founded in 2015 by a team of dedicated wellness professionals with one shared vision — to create a sanctuary where every person could experience genuine healing and restoration.</p>
          <p>What began as a small therapy room in the heart of Nairobi has grown into one of Kenya's most trusted wellness destinations. We have served thousands of clients from all walks of life, helping them restore balance, recover from injury, and rediscover their inner peace.</p>
          <p>Today Zara stands as a full-service wellness centre offering a wide range of therapeutic and beauty treatments, delivered by certified professionals in a warm and welcoming environment.</p>
        </div>
        <div className='about-block'>
          <h3>Our Mission</h3>
          <p>To provide exceptional therapeutic care that nurtures the body, calms the mind and restores the spirit — making professional wellness accessible to everyone.</p>
        </div>
        <div className='about-block'>
          <h3>Our Vision</h3>
          <p>To be East Africa's leading wellness destination, recognised for excellence in therapeutic care, innovation and heartfelt service.</p>
        </div>
      </div>
    </div>
  )
}

export default About
