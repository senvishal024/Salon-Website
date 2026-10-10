import React from 'react'
import NavBar from '../Components/NavBar'
import ServicesHero from '../Components/ServiceComponents/ServiceHero'
import ServiceIntroduction from '../Components/ServiceComponents/ServiceIntroSection'
import HairServices from '../Components/ServiceComponents/hairService'
import SkinFacialServices from '../Components/ServiceComponents/SkinServices'
import MakeupServices from '../Components/ServiceComponents/MakeupService'
import GroomingServices from '../Components/ServiceComponents/GroomingService'
import SpaRelaxation from '../Components/ServiceComponents/SpaService'
import WhyOurServices from '../Components/ServiceComponents/whyOurService'
import ServicePackages from '../Components/ServiceComponents/ServicePakage'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

function ServicesPage() {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetchServices();
  },[])
  const fetchServices=async ()=>{
    const response=await fetch("http://localhost:5000/newgeneration/show-services",{
      credentials:"include",
    })
    const data=await response.json();
    console.log(data)
    setServices(data);

  }
  
  return (
    <div>
      <NavBar ></NavBar>
      <ServicesHero/>
      <ServiceIntroduction/>
      <HairServices services={services.filter(service => service.category==="hair")}/>
      <SkinFacialServices services={services.filter(service => service.category==="skin")}/>
      <MakeupServices services={services.filter(service => service.category==="makeup")}/>
      <GroomingServices services={services.filter(service => service.category==="grooming")} />
      <SpaRelaxation services={services.filter(service => service.category==="spa")}/>
      <ServicePackages/>
      <WhyOurServices/>
      <ContactUs/>
      <Footer/>
    </div>

  )
}

export default ServicesPage
