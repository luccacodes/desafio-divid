import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  city: String,
  temperature: Number,
  date: String,
  description: String,
  icon: String,
})

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;