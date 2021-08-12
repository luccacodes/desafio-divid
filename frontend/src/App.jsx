import React, { useState } from 'react';

import { api } from './services/api';

import { Input, Button, Card, Forecast, Spinner } from './components';

import './App.scss';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState();

  const fetchWeather = async (query) => {
    try {
      setLoading(true);
      const { data } = await api.get('/', {
        params: {
          q: query,
          units: 'metric',
          appid: '24804a219d85e18702adc07175f88330',
        }
      })
      return data;
    } catch (error) {
      alert('Please enter a valid city name.');
    } finally {
      setLoading(false);
    }
    return null;
  }

  const handleSearch = async (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      return;
    }

    const data = await fetchWeather(query);

    console.log(data);
    setWeather(data);
    setQuery('');
  }

  return (
    <div id="container">
      <header>
        <h1>Divid Weather</h1>
        <form onSubmit={handleSearch}>
          <Input
            type="text"
            className="city-search"
            placeholder="Try 'London', or 'Berlin'"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <Button type="submit">
            Search
          </Button>
        </form>
      </header>

      {loading && <div className="spinner"><Spinner /></div>}

      {weather?.city && (
        <main>
          <div class="card-container">
            <Card temperature={weather.list[0].main.temp} city={weather.city.name} date={weather.list[0].dt_txt} icon={weather.list[0].weather[0].icon} description={weather.list[0].weather[0].description} />
          </div>

          <div className="forecast-container">
            <Forecast date={weather.list[8].dt_txt} icon={weather.list[8].weather[0].icon} description={weather.list[8].weather[0].description} temperature={weather.list[8].main.temp} />
            <Forecast date={weather.list[16].dt_txt} icon={weather.list[16].weather[0].icon} description={weather.list[16].weather[0].description} temperature={weather.list[16].main.temp} />
            <Forecast date={weather.list[24].dt_txt} icon={weather.list[24].weather[0].icon} description={weather.list[24].weather[0].description} temperature={weather.list[24].main.temp} />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
