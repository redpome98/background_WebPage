import React, { useState, useEffect } from "react";
import axios from "axios";
const WeatherData = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = "ee3a80c22900f5a43e517ffa956e525f";

          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          );

          setWeatherInfo(response.data);
        });
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {weatherInfo ? (
        <div>
          <p>Temp: {(weatherInfo.main.temp - 273.13).toFixed(2)} 'C</p>
          <p>wind : {weatherInfo.wind.speed} Km</p>
          <p>How does it weather? : {weatherInfo.weather[0].description}</p>
          <p></p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherData;
