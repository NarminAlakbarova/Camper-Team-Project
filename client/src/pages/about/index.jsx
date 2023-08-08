import React from 'react'
import HeroBanner from '../../sections/aboutSections/HeroBanner'
import "./index.scss"
import FaqSection from '../../sections/aboutSections/FaqSection'
import DiscoverTours from '../../sections/homeSections/DiscoverTours'
import AboutCounter from '../../sections/aboutSections/AboutCounter'
import Leaders from '../../sections/aboutSections/Leaders'
import OurMission from '../../sections/aboutSections/OurMission'

const AboutPage = () => {
  return (
    <>
      <HeroBanner/>
      <AboutCounter/>
      <Leaders/>
      <DiscoverTours/>
      <OurMission/>
      <FaqSection/>
    </>
  )
}

export default AboutPage