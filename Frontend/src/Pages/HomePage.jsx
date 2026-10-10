import React from 'react'
import HomeComponent from '../Components/HomeComponents/HomeComponent'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <div className='w-full overflow-x-hidden'>
        <NavBar></NavBar>
      <HomeComponent></HomeComponent>
      <Footer/>
    </div>
  )
}

export default HomePage
