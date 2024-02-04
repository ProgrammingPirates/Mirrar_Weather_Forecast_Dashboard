import React, { useState } from 'react';
import './App.css';

const WeatherForm = ({ city, setCity, unit, setUnit }) => {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
      <label className='button'>
        <input
          type="radio"
          name="unit"
          value="metric"
          checked={unit === 'metric'}
          onChange={() => setUnit('metric')}
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          name="unit"
          value="imperial"
          checked={unit === 'imperial'}
          onChange={() => setUnit('imperial')}
        />
        Fahrenheit
      </label>
    </form>
  );
};

export default WeatherForm;
