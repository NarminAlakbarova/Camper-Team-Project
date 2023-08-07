import React from 'react'
import HeroBanner from '../../sections/aboutSections/HeroBanner'
import "./index.scss"
import FaqSection from '../../sections/aboutSections/FaqSection'
import DiscoverTours from '../../sections/homeSections/DiscoverTours'

const AboutPage = () => {
  return (
    <>
      <HeroBanner/>
      <DiscoverTours/>
      <FaqSection/>
    </>
  )
}

export default AboutPage