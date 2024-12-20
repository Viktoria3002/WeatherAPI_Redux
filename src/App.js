import './App.css';
import './scss/app.scss';
import TodayWeather from './components/Celsius/TodayWeather';
import FindCity from './components/Celsius/FindCity';
import DetailsWeather from './components/Celsius/DetailsWeather';
import Fetch from './components/Celsius/Fetch';
import { useEffect } from 'react';
import { weatherFetch } from './redux/slices/Fetch';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const weather = useSelector((state) => state.weathers.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weatherFetch());
  }, []);
  return (
    <div className="wrapper">
      {/* <div>
        <Fetch />
      </div> */}
      <FindCity />
      <TodayWeather />
      <div className="line"></div>
      <div className="weatherDetailsTitle">Weather Details</div>
      <div className="weatherDetailsItem">
        <DetailsWeather />
        <DetailsWeather />
        <DetailsWeather />
        <DetailsWeather />
        <DetailsWeather />
        <DetailsWeather />
        <DetailsWeather />
        <DetailsWeather />
      </div>

      {weather?.map((item) => (
        <DetailsWeather key={item.id} sunrising={item} />
      ))}
    </div>
  );
}

export default App;
