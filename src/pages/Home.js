import React from 'react'
import Performance from '../components/Performance/Performance'
import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/Services/Services'
import Login from '../components/Login/Login'
import OurDignity from '../components/OurDignity/OurDignity'
const Home = () => {
  return (
    <div>

      <Performance />

      <Services />

      <AboutUs/>

      <OurDignity/>

      <Login isDark />

    </div>
  )
}

export default Home
