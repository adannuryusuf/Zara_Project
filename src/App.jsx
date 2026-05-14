// Import React
import React from 'react'

// Import all the section components
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Services from './components/services/services'
import Title from './components/title/title'
import About from './components/about/about'
import Gallery from './components/gallery/gallery'
import Testimonials from './components/testimonials/testimonials'
import Products from './components/products/products'
import Offers from './components/offers/offers'
import Therapists from './components/therapists/therapists'
import Blog from './components/blog/blog'
import Contact from './components/contacts/contacts'
import Footer from './components/footer/footer'

// Main App component - puts all sections together on one page
function App() {
  return (
    <div>
      <Navbar />

      {/* Each section has an id so the navbar links can scroll to it */}
      <div id="home"><Hero /></div>

      <div className='container'>
        <div id="services">
          <Title subTitle='Our Services' title='What We Offer' />
          <Services />
        </div>

        <div id="about">
          <Title subTitle='About Us' title='Our Story' />
          <About />
        </div>

        <div id="products">
          <Title subTitle='Products' title='Wellness Products' />
          <Products />
        </div>

        <div id="offers">
          <Title subTitle='Special Offers' title='Exclusive Discounts' />
          <Offers />
        </div>

        <div id="therapists">
          <Title subTitle='Our Team' title='Meet Our Therapists' />
          <Therapists />
        </div>

        <div id="gallery">
          <Title subTitle='Gallery' title='Our Clinic' />
          <Gallery />
        </div>

        <div id="blog">
          <Title subTitle='Education' title='About Our Therapies' />
          <Blog />
        </div>

        <div id="testimonials">
          <Title subTitle='Testimonials' title='What Our Clients Say' />
          <Testimonials />
        </div>

        <div id="contact">
          <Title subTitle='Contact Us' title='Get In Touch' />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
