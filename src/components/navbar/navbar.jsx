// Import React and the hooks we need
import React, { useState, useEffect } from 'react'
import './navbar.css'
import ZaraLogo from '../../assets/ZaraLogo.svg'
import VisitorCounter from '../visitorCounter/counter'

const WHATSAPP_NUMBER = '254794080373'

function Navbar() {
  // darkNav turns true when the user scrolls down, changes the nav background
  const [darkNav, setDarkNav] = useState(false)
  // isMenuOpen controls the mobile hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Listen for scroll events to toggle the dark background
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setDarkNav(true)
      } else {
        setDarkNav(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  // Smoothly scroll to whichever section the user clicked
  function scrollToSection(id) {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)  // close mobile menu after clicking
    }
  }

  return (
    <nav className={`container ${darkNav ? 'dark-nav' : ''}`}>
      <img src={ZaraLogo} alt="Zara Therapy Clinic" className='logo' />

      {/* Hamburger button - only shows on mobile */}
      <div className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links - active class opens the mobile menu */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home"        onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
        <li><a href="#about"       onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
        <li><a href="#services"    onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
        <li><a href="#products"    onClick={(e) => { e.preventDefault(); scrollToSection('products') }}>Products</a></li>
        <li><a href="#offers"      onClick={(e) => { e.preventDefault(); scrollToSection('offers') }}>Offers</a></li>
        <li><a href="#therapists"  onClick={(e) => { e.preventDefault(); scrollToSection('therapists') }}>Team</a></li>
        <li><a href="#gallery"     onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}>Gallery</a></li>
        <li><a href="#blog"        onClick={(e) => { e.preventDefault(); scrollToSection('blog') }}>Blog</a></li>
        <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>Reviews</a></li>
        <li><a href="#contact"     onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
        <li><button className='btn dark-btn' onClick={() => window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hi Zara Therapy Clinic, I would like to book a session.'))}>Book Now</button></li>
      </ul>
      
      <VisitorCounter />
    </nav>
  )
}

export default Navbar
