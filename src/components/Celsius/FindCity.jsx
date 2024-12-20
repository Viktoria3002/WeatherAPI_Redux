import React, { useState } from 'react';
import search from './../../assets/img/search.svg';
import ChangeDegrees from '../ChangeDegrees';

const FindCity = () => {
  const [inputValue, setInputValue] = useState('');
  const findCityWeather = (value) => {
    setInputValue(value);
  };

  return (
    <div className="findCity">
      <div>
        <input
          placeholder="E.g Warsaw"
          value={inputValue}
          onChange={(e) => findCityWeather(e.target.value)}
          type="text"
        />
        <img className="searchImg" src={search} alt="search" />
      </div>
      <ChangeDegrees />
    </div>
  );
};

export default FindCity;
