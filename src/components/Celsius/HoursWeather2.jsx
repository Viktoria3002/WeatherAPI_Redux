import React from 'react';
import cloud from '../../assets/img/cloud.svg';

const HoursWeather2 = () => {
  return (
    <div className="hoursWeather">
      <div className="hoursTime">12 pm</div>
      <div className="hoursWeatherBackgroundDark">
        <div>
          <img src={cloud} alt="cloud" />
        </div>
        <div className="degreesHours">2°</div>
      </div>
    </div>
  );
};

export default HoursWeather2;
