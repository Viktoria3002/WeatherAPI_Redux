import React from 'react';
import snowFlake from '../../assets/img/snowflake.svg';
import HoursWeather2 from './HoursWeather2';

const HoursWeather = () => {
  return (
    <div className="hoursWeatherAll">
      <div className="hoursWeather">
        <div className="hoursTime">Now</div>
        <div className="hoursWeatherBackground">
          <div>
            <img src={snowFlake} alt="weather" />
          </div>
          <div className="degreesHours">2°</div>
        </div>
      </div>
      <HoursWeather2 />
      <HoursWeather2 />
      <HoursWeather2 />
      <HoursWeather2 />
      <HoursWeather2 />
      <HoursWeather2 />
      <HoursWeather2 />
    </div>
  );
};

export default HoursWeather;
