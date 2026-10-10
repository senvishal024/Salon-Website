import React from 'react'
import Hero from './Hero'
import ServicesComponent from './ServicesComponent'

import Navbar from '../NavBar'
import AboutUsComponents from './AboutUsComponents'
import Gallery from './Gallery'
import ContactUs from '../ContactUs'

function HomeComponent() {
  return (
    <>
      <Hero/>
      <ServicesComponent/>
      <AboutUsComponents/>
      <Gallery/>
      <ContactUs/>
    </>
  )
}

export default HomeComponent
