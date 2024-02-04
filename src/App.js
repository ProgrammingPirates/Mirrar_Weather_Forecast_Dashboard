import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDetails from './WeatherDetails';
import ForecastList from './ForecastList';
import './App.css';

const API_KEY = 'a557f7078a495c853ca6d64cc2902996'; 
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric'); 

  useEffect(() => {
    if (city) {
      // Fetch current weather data
      fetch(`${API_BASE_URL}weather?q=${city}&units=${unit}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => setWeatherData(data));

      // Fetch 5-day forecast data
      fetch(`${API_BASE_URL}forecast?q=${city}&units=${unit}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => setForecastData(data));
    }
  }, [city, unit]);

  return (
    <div className="app">
      <WeatherForm city={city} setCity={setCity} unit={unit} setUnit={setUnit} />
      {weatherData && <WeatherDetails data={weatherData} unit={unit} />}
      {forecastData && <ForecastList data={forecastData} unit={unit} />}
    </div>
  );
}

export default App;
