import React, { useEffect, useState } from "react";
import DetailsReports from "./DetailsReports";
import WeatherBooking from "./WeatherBooking";
import "./index.scss";
import axios from "axios";
const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Baku");
  const apiKey = "cf1fc6778d5129d8569abad05b05bf2e";
  const fetchData = async () => {
    try {
      const resp = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = resp.data;
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city, apiKey]);
  return (
    <div id="admin-home">
      <div className="heading">
        <h3>Welcome Admin</h3>
        <p>
          All systems are running smoothly! You have{" "}
          <span> 3 unread alerts!</span>
        </p>
      </div>
      <div className="admin-home-weather">
        <WeatherBooking weatherData={weatherData} />
      </div>
        <DetailsReports />
    </div>
  );
};

export default Home;
