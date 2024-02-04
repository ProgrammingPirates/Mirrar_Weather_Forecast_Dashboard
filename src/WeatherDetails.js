import React from 'react';
const WeatherDetails = ({ data, unit }) => {
  const getIconUrl = (iconCode) => `http://openweathermap.org/img/w/${iconCode}.png`;

  if (!data || !data.sys) {
    return <p>No weather data available</p>;
  }

  // Render the weather details
  return (
    <div className="weather-details">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Min/Max Temperature: {data.main.temp_min}°{unit === 'metric' ? 'C' : 'F'} / {data.main.temp_max}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s, {data.wind.deg}°</p>
      <p>Description: {data.weather[0].description}</p>

      {/* Display weather icon if available */}
      {data.weather[0].icon && (
        <img
          src={getIconUrl(data.weather[0].icon)}
          alt="Weather Icon"
          style={{ width: '50px', height: '50px' }}
        />
      )}
    </div>
  );
};

export default WeatherDetails;
