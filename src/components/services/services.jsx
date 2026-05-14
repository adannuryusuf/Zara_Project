// Import React and useState hook
import React, { useState } from 'react'
import './services.css'

// Import service images
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'
import service4 from '../../assets/service4.jpg'

// All service data in one array - easier to update
const services = [
  {
    img: service1,
    title: 'Massage Therapy',
    details: 'Our massage sessions are tailored to your needs — whether you\'re dealing with chronic muscle tension, recovering from injury, or just need to unwind. We offer Swedish, deep tissue, hot stone and sports massage.',
    price: 'From KES 2,500',
    duration: '60 – 120 min'
  },
  {
    img: service2,
    title: 'Mental Therapy',
    details: 'Our licensed therapists provide one-on-one counselling sessions covering stress, anxiety, grief and general mental wellness. Sessions are completely confidential.',
    price: 'From KES 3,000',
    duration: '50 min'
  },
  {
    img: service3,
    title: 'Beauty Therapy',
    details: 'From deep-cleansing facials to body wraps and scrubs, our beauty therapists use premium products suited to your skin type for a full rejuvenation experience.',
    price: 'From KES 1,800',
    duration: '45 – 90 min'
  },
  {
    img: service4,
    title: 'Physical Therapy',
    details: 'Designed for people recovering from surgery or sports injuries. Our physical therapists build personalised programs that rebuild strength and reduce pain at your pace.',
    price: 'From KES 3,500',
    duration: '60 – 90 min'
  }
]

function Services() {
  // selectedService holds whichever service the user clicked, or null if modal is closed
  const [selectedService, setSelectedService] = useState(null)

  // Open WhatsApp with a pre-filled booking message for the selected service
  function bookService() {
    if (!selectedService) return

    const WHATSAPP_NUMBER = '254794080373'
    const message = `Hi Zara Therapy Clinic, I would like to book the service: ${selectedService.title}. Please help me schedule a session.`
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)
    window.open(url, '_blank')
    setSelectedService(null)
  }

  return (
    <div>
      {/* Service cards */}
      <div className='services'>
        {services.map(function(service, index) {
          return (
            <div className='service' key={index}>
              <img src={service.img} alt={service.title} />
              <div className='caption'>
                <h3>{service.title}</h3>
                <button className='btn' onClick={() => setSelectedService(service)}>
                  Learn More
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal - only shows when a service is selected */}
      {selectedService && (
        <div className='modal-overlay' onClick={() => setSelectedService(null)}>
          <div className='service-modal' onClick={(e) => e.stopPropagation()}>

            <button className='modal-close' onClick={() => setSelectedService(null)}>✕</button>
            <img src={selectedService.img} alt={selectedService.title} className='modal-img' />

            <div className='modal-body'>
              <h2>{selectedService.title}</h2>
              <p className='modal-desc'>{selectedService.details}</p>

              <div className='modal-meta'>
                <span>⏱ {selectedService.duration}</span>
                <span>💰 {selectedService.price}</span>
              </div>

              <button className='btn dark-btn' onClick={bookService}>
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
