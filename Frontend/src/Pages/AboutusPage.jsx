import React from 'react'
import Navbar from '../Components/NavBar'
import AboutHero from '../Components/AboutComponents/AboutHeroComponent'
import OurStory from '../Components/AboutComponents/OurStorySection'
import MissionVision from '../Components/AboutComponents/OurMissionSection'
import WhyChooseUs from '../Components/AboutComponents/WhyChooseUsSection'
import ExperienceStats from '../Components/AboutComponents/OurExperience'
import OurTeam from '../Components/AboutComponents/OurTeam'
import AppointmentCTA from '../Components/AboutComponents/AppoinmentCTA'
import Footer from '../Components/Footer'


function AboutusPage() {
  return (
    <div>
      <Navbar></Navbar>
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
      <WhyChooseUs/>
      <ExperienceStats/>
      <OurTeam/>
      <AppointmentCTA/>
      <Footer/>
    </div>
  )
}

export default AboutusPage
