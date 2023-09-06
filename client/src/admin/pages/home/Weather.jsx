import React from "react";
import { BsCloudSun } from "react-icons/bs";
import weatherImg from "../../../assets/img/adminPage/weather.png";
const Weather = ({weatherData}) => {

  return (
    <div className="weather-container">
      <div className="weather-content">
        <img src={weatherImg} alt="" />

        {weatherData && (
          <div className="weather-info">
            <BsCloudSun />
            <h3>
              {weatherData.main.temp}
              <span>C</span>
            </h3>
            <div className="city">
              <p>{weatherData.name}</p>
              <p className="desc"> {weatherData.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
