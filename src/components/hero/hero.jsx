// Import React and the CSS file
import React from 'react'
import './hero.css'

function Hero() {
  const WHATSAPP_NUMBER = '254794080373'

  // Scroll down smoothly to whatever section id we pass in
  function scrollTo(id) {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function openWhatsAppBooking() {
    const message = 'Hi Zara Therapy Clinic, I would like to book a session.'
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank')
  }

  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to Zara Therapy Clinic</h1>
        <p>Stress relief, injury recovery, and genuine relaxation — all in one place.</p>

        <div className='hero-btns'>
          {/* Button scrolls to the offers section */}
          <button className='btn dark-btn' onClick={() => scrollTo('offers')}>
            Explore Offers
          </button>

          {/* Button scrolls to the contact/booking section */}
          <button className='hero-outline-btn' onClick={openWhatsAppBooking}>
            Book a Session
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
