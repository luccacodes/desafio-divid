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
  const weather = req.body;

  const newWeather = new Weather(weather);

  try {
    await newWeather.save();

    res.status(201).json(newWeather);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}