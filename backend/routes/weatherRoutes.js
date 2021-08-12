import express from 'express';

import { getWeather, storeWeather } from '../controllers/weatherController.js';

const router = express.Router();

router.get('/', getWeather);
router.get('/store', storeWeather);

export default router;