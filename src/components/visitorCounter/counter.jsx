// Import React hooks
import React, { useState, useEffect } from 'react'
import './counter.css'

// This component counts visitors using localStorage so the count persists
function VisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Get existing count from localStorage, or start at 0
    let saved = localStorage.getItem('visitorCount')

    if (!saved) {
      saved = 1
    } else {
      saved = parseInt(saved) + 1
    }

    // Save the updated count and display it
    localStorage.setItem('visitorCount', saved)
    setCount(saved)
  }, [])

  return (
    <div className='visitor-counter'>
      <span>👁 Visitors: {count}</span>
    </div>
  )
}

export default VisitorCounter
