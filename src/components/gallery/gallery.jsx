// Import React and useState
import React, { useState } from 'react'
import './gallery.css'
import gallery1 from '../../assets/gallery1.jpeg'
import gallery2 from '../../assets/gallery2.jpeg'
import gallery3 from '../../assets/gallery3.jpeg'
import gallery4 from '../../assets/gallery4.jpeg'
import gallery5 from '../../assets/gallery5.jpeg'
import gallery6 from '../../assets/gallery6.jpeg'
import gallery7 from '../../assets/gallery7.jpeg'
import gallery8 from '../../assets/gallery8.png'

// Gallery images - using Unsplash URLs so we don't need local files
const allImages = [
  { src: gallery1, alt: 'Hot stone massage' },
  { src: gallery2, alt: 'Facial treatment' },
  { src: gallery3, alt: 'Spa room' },
  { src: gallery4, alt: 'Therapist preparing' },
  { src: gallery5, alt: 'Aromatherapy oils' },
  { src: gallery6, alt: 'Relaxing massage' },
  { src: gallery7, alt: 'Couple spa' },
  { src: gallery8, alt: 'Therapy session' }
]

function Gallery() {
  // showAll toggles between 4 and all 8 images
  const [showAll,  setShowAll]  = useState(false)
  // lightboxIndex stores which image is open in the lightbox (-1 = closed)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  // Show only 4 images unless showAll is true
  const visibleImages = showAll ? allImages : allImages.slice(0, 4)

  // Go to previous image in lightbox
  function prevImage() {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
    } else {
      setLightboxIndex(visibleImages.length - 1)
    }
  }

  // Go to next image in lightbox
  function nextImage() {
    if (lightboxIndex < visibleImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
    } else {
      setLightboxIndex(0)
    }
  }

  return (
    <div className='gallery'>

      {/* Image grid */}
      <div className='gallery-grid'>
        {visibleImages.map(function(image, index) {
          return (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className='gallery-thumb'
              onClick={() => setLightboxIndex(index)}
            />
          )
        })}
      </div>

      {/* View More / Show Less button */}
      <button className='btn dark-btn' onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'View More'}
      </button>

      {/* Lightbox - only shows when an image is selected */}
      {lightboxIndex >= 0 && (
        <div className='lightbox-overlay' onClick={() => setLightboxIndex(-1)}>

          {/* Stop clicks on the image itself from closing the overlay */}
          <img
            src={visibleImages[lightboxIndex].src}
            alt={visibleImages[lightboxIndex].alt}
            className='lightbox-img'
            onClick={(e) => e.stopPropagation()}
          />

          <button className='lightbox-close' onClick={() => setLightboxIndex(-1)}>✕</button>
          <button className='lightbox-nav left'  onClick={(e) => { e.stopPropagation(); prevImage() }}>‹</button>
          <button className='lightbox-nav right' onClick={(e) => { e.stopPropagation(); nextImage() }}>›</button>

          <p className='lightbox-caption'>{visibleImages[lightboxIndex].alt}</p>
        </div>
      )}
    </div>
  )
}

export default Gallery
