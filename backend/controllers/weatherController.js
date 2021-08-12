import axios from 'axios';
import Weather from '../models/weatherModel.js';

export const getWeather = async (req, res) => {
  try {
    const weatherInfo = await Weather.find();

    console.log(weatherInfo);

    res.status(200).json(weatherInfo);
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const storeWeather = (req, res) => {
  const query = req.params.query;

  const weather = axios.get('http://api.openweathermap.org/data/2.5/forecast', {
    params: {
      q: query,
      units: 'metric',
      appid: '24804a219d85e18702adc07175f88330',
    }
  })

  const newWeather = new Weather(weather);

  try {
    newWeather.save();

    res.status(201).json(newWeather);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}