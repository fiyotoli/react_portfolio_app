import React from 'react'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'
import Skills from '../../components/Skills/Skills'
import About from '../../components/About/About'
import Portfolio from '../../components/Portfolio/Portfolio'
import TestimonialCarousel from '../../components/Testimony/Testimony'
import Contact from '../../components/Contact/Contact'
import SuccessfulJob from '../../components/SuccessfulJob/SuccessfulJob'

function Home() {
  return (
    <div>
      <Hero/>
      <Service/>
      <About />
      <Skills/>
      <SuccessfulJob/>
      <Portfolio/>
      <TestimonialCarousel/>
      <Contact/>

    </div>
  )
}

export default Home
