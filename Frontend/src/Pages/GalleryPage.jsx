import React from 'react'
import GalleryHero from '../Components/GalleryComponents/GalleryHero'
import Navbar from '../Components/NavBar'
import GalleryIntroduction from '../Components/GalleryComponents/GalleryIntro'
import Footer from '../Components/Footer'
import MainGallery from '../Components/GalleryComponents/MainGallery'
import BeforeAfter from '../Components/GalleryComponents/GalleryBeforeAfter'
import OurSalon from '../Components/GalleryComponents/SalonGallery'
import InstagramStyle from '../Components/GalleryComponents/GalleryInstaStyle'
import ContactUs from '../Components/ContactUs'

function GalleryPage() {
  return (
    <>
        <Navbar/>
        <GalleryHero/>
        <GalleryIntroduction/>
        <MainGallery/>
        <BeforeAfter/>
        <OurSalon/>
        <InstagramStyle/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default GalleryPage
