import React from 'react';
import sunrise from '../../assets/img/sunrise.svg';

const DetailsWeather = ({ item }) => {
  return (
    <div>
      <div className="weatherDetails">
        <div>
          <div className="weatherDetailsItem">SUNRISE</div>
          <div className="timeWeatherDetails">{item.sunrise}</div>
        </div>
        <div className="weatherDetailsImg">
          <img src={sunrise} alt="weather-details" />
        </div>
      </div>
    </div>
  );
};

export default DetailsWeather;
