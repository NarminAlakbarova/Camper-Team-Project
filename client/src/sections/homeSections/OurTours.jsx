import React from 'react'
import { Link } from 'react-router-dom'
import ToursCarousel from '../../components/toursCarousel/ToursCarousel'

const OurTours = ({sectionTitle}) => {
  return (
    <div id={sectionTitle} className="our-tours" >
      <div className="container">
        <div className="our-popular-tours">
          <div className="our-popular-tours-top">
            <p>{
              sectionTitle=="our-popular-tours" ? "Our Popular Tours" : "New Tours"}</p>
            <Link to={""}>View All Tours</Link>
          </div>
          <ToursCarousel sectionTitle={sectionTitle}/>
        </div>
      </div>
    </div>
  )
}

export default OurTours