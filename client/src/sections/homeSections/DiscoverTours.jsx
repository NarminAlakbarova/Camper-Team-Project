import React from 'react'
import DiscoverButton from '../../components/DiscoverButton'

const DiscoverTours = () => {
  return (
    <div id='discover-tours'>
        <div className="container">
            <div className="discover-tours">
                <h2>We offer tours in a range of locations</h2>
                <p>Our mountain tours take you to the highest peaks, where you can witness stunning vistas and enjoy the crisp mountain air. Our beach tours, on the other hand, offer a chance to relax and unwind on the sandy shores.</p>
                <DiscoverButton/>
            </div>
        </div>
    </div>
  )
}

export default DiscoverTours