// Import React and useState
import React, { useState } from 'react'
import './therapists.css'
import therapist1 from '../../assets/therapist1.png'
import therapist2 from '../../assets/therapist2.jpg'
import therapist3 from '../../assets/therapist3.jpg'

// WhatsApp phone number for booking
const WHATSAPP_NUMBER = '254794080373'

// Therapist data for the page
const therapistList = [
  {
    img: therapist1,
    name: 'Dr. Grace Johnson',
    role: 'Lead Therapist',
    experience: '15 years experience',
    speciality: 'Deep tissue & rehabilitation',
    bio: 'Dr. Grace leads our therapy team with a focus on injury recovery and muscle health.'
  },
  {
    img: therapist2,
    name: 'John Lee',
    role: 'Massage Specialist',
    experience: '8 years experience',
    speciality: 'Swedish & hot stone massage',
    bio: 'John is calm and professional. He helps clients relax and feel better during every session.'
  },
  {
    img: therapist3,
    name: 'Martha Stewart',
    role: 'Beauty Therapist',
    experience: '10 years experience',
    speciality: 'Facials & skin treatments',
    bio: 'Martha is gentle and trained in skin care. She checks your skin type before every treatment.'
  }
]

function Therapists() {
  // selectedTherapist is the therapist the user wants to book
  const [selectedTherapist, setSelectedTherapist] = useState(null)

  // Booking form fields
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState('')

  // Open booking form for a therapist
  function openBooking(therapist) {
    setSelectedTherapist(therapist)
    setName('')
    setPhone('')
    setEmail('')
    setDate('')
    setTime('')
    setNotes('')
    setError('')
  }

  // Send the booking by opening WhatsApp
  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !phone || !date || !time) {
      setError('Please fill in your name, phone, date and time.')
      return
    }

    const message =
      'Hi Zara Therapy Clinic!\n\n' +
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Therapist: ' + selectedTherapist.name + '\n' +
      'Service: ' + selectedTherapist.speciality + '\n' +
      'Date: ' + date + '\n' +
      'Time: ' + time + '\n' +
      'Notes: ' + notes + '\n\n' +
      'Please confirm my booking. Thank you.'

    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)
    window.open(url, '_blank')
    setSelectedTherapist(null)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div>
      <div className='therapists'>
        {therapistList.map(function(therapist, index) {
          return (
            <div className='therapist-card' key={index}>
              <div className='avatar'>
                <img src={therapist.img} alt={therapist.name} />
              </div>
              <h3>{therapist.name}</h3>
              <p className='role'>{therapist.role}</p>
              <p className='exp-text'>{therapist.experience}</p>
              <p className='speciality-text'>{therapist.speciality}</p>
              <button className='btn dark-btn' onClick={() => openBooking(therapist)}>
                Book Session
              </button>
            </div>
          )
        })}
      </div>

      {selectedTherapist && (
        <div className='modal-overlay' onClick={() => setSelectedTherapist(null)}>
          <div className='booking-modal' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close-btn' onClick={() => setSelectedTherapist(null)}>✕</button>

            <div className='booking-header'>
              <div className='booking-avatar'>
                <img src={selectedTherapist.img} alt={selectedTherapist.name} />
              </div>
              <div>
                <h3>Book with {selectedTherapist.name}</h3>
                <p>{selectedTherapist.role} · {selectedTherapist.speciality}</p>
              </div>
            </div>

            <p className='booking-bio'>{selectedTherapist.bio}</p>

            <form onSubmit={handleSubmit} className='booking-form'>
              <div className='form-row'>
                <input
                  type='text'
                  placeholder='Your name *'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type='tel'
                  placeholder='Phone number *'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <input
                type='email'
                placeholder='Email (optional)'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className='form-row'>
                <input
                  type='date'
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                />
                <select value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value=''>Select time *</option>
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                </select>
              </div>

              <textarea
                placeholder='Anything we should know?'
                rows='3'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              {error && <p className='booking-error'>{error}</p>}

              <button type='submit' className='whatsapp-submit-btn'>
                Confirm Booking on WhatsApp
              </button>

              <p className='wa-note'>WhatsApp will open with your booking details.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Therapists
