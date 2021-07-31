import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import weatherRoutes from './routes/weatherRoutes.js';

const app = express();

app.use('/weather', weatherRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://lucca:teste1234@cluster0.htxeb.mongodb.net/desafio-divid?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// connect to mongodb
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)))
  .catch((err) => console.log(err.message));

// app.get('/add-weather', (req, res) => {
//   const weather = new Weather({
//     // testing with random data
//     city: 'Florianopolis',
//     temperature: 10,
//     date: '2020-08-04 18:00:00',
//     description: 'light rain',
//     icon: '10d',
//   })

//   weather.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/', (req, res) => {
//   Weather.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// })