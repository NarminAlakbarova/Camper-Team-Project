import React from 'react'
import Weather from './Weather'
import BookingInfo from './BookingInfo'

const WeatherBooking = ({weatherData}) => {
  return (
    <div id='weather-booking'>
      <div className="weather-booking-container">
        <div className=" weather-booking ">
            <div className="weather ">
                <Weather weatherData={weatherData} />
            </div>
            <div className="booking">
                <BookingInfo/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherBooking
