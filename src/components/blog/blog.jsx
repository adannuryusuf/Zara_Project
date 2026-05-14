// Import React and useState
import React, { useState } from 'react'
import './blog.css'

// Educational content about each therapy type
const therapies = [
  {
    title: 'Physical Therapy',
    short: 'Rehabilitative exercises and treatments to restore movement and function.',
    full: 'Physical therapy involves a range of exercises and treatments designed to restore movement and function, reduce pain, and promote healing. It is often used to treat injuries, manage chronic conditions, and improve overall physical performance. Sessions may include stretching, strengthening exercises, manual therapy, and the use of equipment such as resistance bands or exercise balls.'
  },
  {
    title: 'Massage Therapy',
    short: 'Hands-on techniques to relax muscles, improve circulation, and reduce stress.',
    full: 'Massage therapy uses various hands-on techniques to manipulate the muscles and soft tissues of the body. It can help relax tight muscles, improve circulation, reduce stress, and promote overall well-being. Common types of massage include Swedish, deep tissue, sports, and trigger point therapy. Each type targets different needs, from relaxation to injury recovery.'
  },
  {
    title: 'Mental Wellness Therapy',
    short: 'Therapeutic approaches to support mental health and emotional well-being.',
    full: 'Mental wellness therapy encompasses a variety of techniques aimed at supporting mental health and emotional well-being. This can include cognitive behavioral therapy, mindfulness practices, and other evidence-based approaches to help individuals manage stress, anxiety, and other mental health challenges.'
  },
  {
    title: 'Beauty Therapy',
    short: 'Non-invasive treatments to enhance skin health and appearance.',
    full: 'Beauty therapy includes a variety of non-invasive treatments aimed at enhancing skin health and appearance. These can include facials, microdermabrasion, chemical peels, and other cosmetic procedures. Beauty therapists use specialized techniques and products to address various skin concerns, from acne and aging to dryness and discoloration.'
  }
]

function Blog() {
  // expandedCards tracks which cards are open, using the index as the key
  const [expandedCards, setExpandedCards] = useState({})

  // Toggle a card between expanded and collapsed
  function toggleCard(index) {
    const isCurrentlyOpen = expandedCards[index]
    setExpandedCards({ ...expandedCards, [index]: !isCurrentlyOpen })
  }

  return (
    <div className='education'>
      {therapies.map(function(therapy, index) {
        const isOpen = expandedCards[index]

        return (
          <div className={`edu-card ${isOpen ? 'edu-card-open' : ''}`} key={index}>
            <h3>{therapy.title}</h3>

            {/* Show full text if open, short text if closed */}
            <p>{isOpen ? therapy.full : therapy.short}</p>

            <button className='btn dark-btn' onClick={() => toggleCard(index)}>
              {isOpen ? 'Show Less ↑' : 'Learn More ↓'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Blog
