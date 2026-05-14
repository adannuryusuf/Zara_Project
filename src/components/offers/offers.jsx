// Import React and useState
import React, { useState } from 'react'
import './offers.css'

// All offers in one array
const offersList = [
  {
    title: 'First Visit — 30% Off',
    desc: 'New to Zara? Your first session is 30% cheaper. No strings attached.',
    code: 'WELCOME30',
    expires: 'Valid through Dec 2025'
  },
  {
    title: '5-Session Package',
    desc: 'Book 5 sessions and the 6th one is on us.',
    code: 'PACKAGE5',
    expires: 'No expiry'
  },
  {
    title: 'Refer a Friend',
    desc: 'Send someone our way and you both get 20% off your next visit.',
    code: 'REFER20',
    expires: 'Ongoing offer'
  }
]

function Offers() {
  // copied tracks which offer codes have been copied, using the index as key
  const [copied, setCopied] = useState({})

  // Copy the coupon code to clipboard and show feedback
  function claimOffer(index, code) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code)
    }

    // Mark this offer as copied
    setCopied({ ...copied, [index]: true })

    // Reset after 3 seconds
    setTimeout(function() {
      setCopied({ ...copied, [index]: false })
    }, 3000)
  }

  return (
    <div className='offers'>
      {offersList.map(function(offer, index) {
        return (
          <div className='offer-card' key={index}>
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>

            <div className='coupon-code'>
              Code: <span>{offer.code}</span>
            </div>

            <p className='offer-expires'>{offer.expires}</p>

            {/* Button changes text after user clicks it */}
            <button
              className={`btn ${copied[index] ? 'btn-claimed' : ''}`}
              onClick={() => claimOffer(index, offer.code)}
            >
              {copied[index] ? '✓ Code Copied!' : 'Claim Offer'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Offers
