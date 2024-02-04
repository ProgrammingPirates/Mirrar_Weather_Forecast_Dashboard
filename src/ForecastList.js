import React from 'react';

const ForecastList = ({ data, unit }) => {
  console.log('data:', data);
  // Function to get the icon URL
  const getIconUrl = (iconCode) => `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div className="forecast-list">
      <h2>5-Day Forecast</h2>
      {data && data.list ? (
        data.list.map((item) => (
          <div key={item.dt} className="days cards">
            <p>Date: {item.dt_txt}</p>
            <p>Average Temperature: {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
            <p>Description: {item.weather[0].description}</p>
            {item.weather[0].icon && (
              <img
                src={getIconUrl(item.weather[0].icon)}
                alt="Weather Icon"
                style={{ width: '50px', height: '50px' }}
              />
            )}
          </div>
        ))
      ) : (
        <p>No forecast data available</p>
      )}
    </div>
  );
};

export default ForecastList;
