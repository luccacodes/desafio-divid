import React, { useState } from 'react';

import { api } from './services/api';

import './App.scss';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const fetchWeather = async (query) => {
    const { data } = await api.get('/', {
      params: {
        q: query,
        units: 'metric',
        appid: '24804a219d85e18702adc07175f88330',
      }
    })
  
    return data;
  }

  const searchCity = async (event) => {
    if (event.key === 'Enter') {
      const data = await fetchWeather(query)

      console.log(data);
      setWeather(data);
      setQuery('');
    }
  }

  // trying to fix temperatures
  const getMinMaxFromArray = (list) => {
    let min = Math.min.apply(null, list);
    let max = Math.max.apply(null, list);
    return `Min: ${min} Max: ${max}`;
  }

  return (
    <div id="container">
      <header>
        <h1>Divid Weather</h1>
        <input
          type="text"
          className="city-search"
          placeholder="Try 'London', or 'Berlin'"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={searchCity}
        />
      </header>

      {weather.city && (
        <main>
          <div className="city-container">
            <div className="city-temp">
              {Math.round(weather.list[0].main.temp)}
              <sup>&deg;</sup>
            </div>
            <div className="city-info">
              <div className="city-name">
                {weather.city.name}
              </div>
              <div className="city-date">
                {weather.list[0].dt_txt.replace(/-/g, '/')}
              </div>
            </div>
            <div className="city-icon">
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                alt={weather.list[0].weather[0].description}
              />
              <p className="icon-description">{weather.list[0].weather[0].description}</p>
            </div>
          </div>

          <div className="forecast">
            <div className="forecast-info">
              <div className="forecast-date">
                {weather.list[8].dt_txt.replace(/-/g, '/').slice(0, -9)}
              </div>
              <img
                className="city-icon"
                src={`http://openweathermap.org/img/wn/${weather.list[8].weather[0].icon}@2x.png`}
                alt={weather.list[8].weather[0].description}
              />
              <div className="forecast-temp">
                {Math.round(weather.list[8].main.temp)}
                <sup>&deg;</sup>C
              </div>
              <p>{weather.list[8].weather[0].description}</p>
            </div>
            <div className="forecast-info">
              <div className="forecast-date">
                {weather.list[16].dt_txt.replace(/-/g, '/').slice(0, -9)}
              </div>
              <img
                className="city-icon"
                src={`http://openweathermap.org/img/wn/${weather.list[16].weather[0].icon}@2x.png`}
                alt={weather.list[16].weather[0].description}
              />
              <div className="forecast-temp">
                {Math.round(weather.list[16].main.temp)}
                <sup>&deg;</sup>C
              </div>
              <p>{weather.list[16].weather[0].description}</p>
            </div>
            <div className="forecast-info">
              <div className="forecast-date">
                {weather.list[24].dt_txt.replace(/-/g, '/').slice(0, -9)}
              </div>
              <img
                className="city-icon"
                src={`http://openweathermap.org/img/wn/${weather.list[24].weather[0].icon}@2x.png`}
                alt={weather.list[24].weather[0].description}
              />
              <div className="forecast-temp">
                {Math.round(weather.list[24].main.temp)}
                <sup>&deg;</sup>C
              </div>
              <p>{weather.list[24].weather[0].description}</p>
            </div> 
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
