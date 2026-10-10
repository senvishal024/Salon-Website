import React from 'react'
import Navbar from '../Components/NavBar'
import ContactHero from '../Components/ContactComponent/ContactUsHero'
import ContactInformation from '../Components/ContactComponent/ContactInfo'
import ContactQuickInfo from '../Components/ContactComponent/WhyContactUs'
import FindUs from '../Components/ContactComponent/FindUs'
import Footer from '../Components/Footer'

function ContactUsPage() {
  return (
    <div>
      <Navbar></Navbar>
      <ContactHero/>
      <ContactInformation/>
      <ContactQuickInfo/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default ContactUsPage
