// Import React and the state hook
import React, { useState } from 'react'
import './contacts.css'

function Contact() {
  // One state variable per field
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error,   setError]   = useState('')
  const [sent,    setSent]    = useState(false)

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault()

    // Check all fields are filled in
    if (!name || !email || !message) {
      setError('Please fill in all fields before sending.')
      return
    }

    // Simple email format check
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    // Build a simple mailto: link so the message opens in the user's email app
    const subject = encodeURIComponent('Contact from Zara Therapy Clinic website')
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)
    window.location.href = 'mailto:zaratherapyclinic@gmail.com?subject=' + subject + '&body=' + body
    setError('')
    setSent(true)
  }

  // Reset the form so the user can send another message
  function resetForm() {
    setName(''); setEmail(''); setMessage('')
    setError(''); setSent(false)
  }

  return (
    <div className='contact'>

      {/* Left side - contact form */}
      <div className='contact-left'>
        <h3>Send Us a Message</h3>

        {/* Show success message if the form was submitted */}
        {sent ? (
          <div className='form-success'>
            <div className='success-icon'>✓</div>
            <h4>Message received!</h4>
            <p>Thanks {name}, we will get back to you at <strong>{email}</strong> within 24 hours.</p>
            <button className='btn dark-btn' onClick={resetForm}>Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Your Message'
              rows='5'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* Show error if any */}
            {error && <p className='form-error'>{error}</p>}

            <button type="submit" className='btn dark-btn'>Send Message</button>
          </form>
        )}
      </div>

      {/* Right side - map and contact details */}
      <div className='contact-right'>
        <h3>Find Us</h3>

        {/* Google Maps embed - shows our Nairobi location */}
        <div className='map-container'>
          <iframe
            className='contact-map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7935737489917!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2e9b2f5e1%3A0x5a5c5e5a5b9a0e0e!2sNairobi%20CBD%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske'
            title='Zara Therapy Clinic Location'
            loading='lazy'
          />
        </div>

        <div className='contact-details'>
          <p>📍 Moi Avenue, Nairobi CBD, Kenya</p>
          <p>📞 <a href='tel:+254794080373'>+254 794 080 373</a></p>
          <p>✉️ <a href='mailto:zaratherapyclinic@gmail.com'>zaratherapyclinic@gmail.com</a></p>
          <p>🕐 Monday – Saturday: 8:00 AM – 6:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
