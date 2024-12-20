// import { useState, useEffect } from 'react';
// import DetailsWeather from './DetailsWeather';

// const Fetch = () => {
//   const [weather, setWeather] = useState([]);
//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=55.751244&lon=37.618423&appid=c0c767d0dbd4142401b9bca74616fa02`,
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setWeather(data);
//       });
//   }, []);
//   return (
//     <div>
//       {weather.map((item) => {
//         return (
//           <div>
//             <div className="weatherDetails">
//               <div>
//                 <div className="weatherDetailsItem">SUNRISE</div>
//                 <div className="timeWeatherDetails">${item.sunrise}</div>
//               </div>
//               <div className="weatherDetailsImg">
//                 <img src={'#'} alt="weather-details" />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Fetch;
