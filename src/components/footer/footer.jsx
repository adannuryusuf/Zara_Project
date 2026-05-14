// Import React and hooks
import React, { useState, useEffect } from 'react'
import './footer.css'

function Footer() {
  // Live date and time state
  const [dateTime, setDateTime] = useState(new Date())
  // Location from Geolocation API, defaults to Nairobi
  const [location, setLocation] = useState('Nairobi, Kenya')

  // Update the clock every second
  useEffect(function() {
    const timer = setInterval(function() {
      setDateTime(new Date())
    }, 1000)

    // Clean up the interval when component unmounts
    return function() { clearInterval(timer) }
  }, [])

  // Try to get the user's location using the HTML5 Geolocation API
  useEffect(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const lat = position.coords.latitude.toFixed(2)
          const lng = position.coords.longitude.toFixed(2)
          setLocation(lat + '°, ' + lng + '°')
        },
        function() {
          // If permission is denied, keep the default
          setLocation('Nairobi, Kenya')
        }
      )
    }
  }, [])

  // Format the date nicely
  const formattedDate = dateTime.toLocaleDateString('en-KE', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  })
  const formattedTime = dateTime.toLocaleTimeString()

  // Ticker text - shown twice so the scroll looks continuous
  const tickerText = '📍 ' + location + '  ·  📅 ' + formattedDate + '  ·  ⏰ ' + formattedTime + '  ·  📞 +254 794 080 373  ·  ✉️ zaratherapyclinic@gmail.com  ·  🕐 Mon–Sat: 8AM–6PM  ·  '

  // Scroll to a section from the footer links
  function scrollTo(id) {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className='footer'>

      {/* Scrolling ticker at the bottom */}
      <div className='ticker'>
        <div className='ticker-track'>
          <span>{tickerText}{tickerText}</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className='footer-content'>
        <div className='footer-grid'>

          <div className='footer-section'>
            <h4>Zara Therapy Clinic</h4>
            <p>Founded in 2015, we have grown from a small therapy room into one of Nairobi's most trusted wellness centres.</p>
          </div>

          <div className='footer-section'>
            <h4>Quick Links</h4>
            <ul>
              <li><span onClick={() => scrollTo('home')}>Home</span></li>
              <li><span onClick={() => scrollTo('services')}>Services</span></li>
              <li><span onClick={() => scrollTo('about')}>About Us</span></li>
              <li><span onClick={() => scrollTo('contact')}>Contact</span></li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Our Services</h4>
            <ul>
              <li>Massage Therapy</li>
              <li>Mental Therapy</li>
              <li>Beauty Therapy</li>
              <li>Physical Therapy</li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Contact Info</h4>
            <p>📍 Moi Avenue, Nairobi CBD</p>
            <p>📞 <a href="tel:+254794080373">+254 794 080 373</a></p>
            <p>✉️ <a href="mailto:zaratherapyclinic@gmail.com">zaratherapyclinic@gmail.com</a></p>
            <p>🕐 Mon–Sat: 8AM – 6PM</p>
          </div>
        </div>

        {/* Social media section */}
        <div className='social-media'>
          <a href='https://www.facebook.com/zaratherapyclinic' target='_blank' rel='noopener noreferrer' title='Facebook'>f</a>
          <a href='https://www.instagram.com/zaratherapyclinic' target='_blank' rel='noopener noreferrer' title='Instagram'>@</a>
          <a href='https://twitter.com/zaratherapy' target='_blank' rel='noopener noreferrer' title='Twitter'>𝕏</a>
          <a href='https://www.linkedin.com/company/zara-therapy-clinic' target='_blank' rel='noopener noreferrer' title='LinkedIn'>in</a>
        </div>

        <div className='footer-bottom'>
          <p>© {new Date().getFullYear()} Zara Therapy Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
