import React from 'react';
import place from '../../assets/img/location.svg';
import snowFlake from '../../assets/img/snowflake.svg';
import HoursWeather from './HoursWeather';

const TodayWeather = () => {
  return (
    <div className="todayWeather">
      <div className="todayDay">
        <div className="todayDate">
          <div>
            <div className="today">Today</div>
            <div className="dayOfWeekToday">Wed, 17 Feb</div>
          </div>
          <div>
            <img className="snowFlakeToday" src={snowFlake} alt="snowFlake" />
          </div>
        </div>
        <div className="todayDegrees">2°</div>
        <div>
          <div className="placeToday">
            <img src={place} alt="place" />
            <div>Cracow, Poland</div>
          </div>
        </div>
      </div>
      <div>
        <HoursWeather />
      </div>
    </div>
  );
};

export default TodayWeather;
