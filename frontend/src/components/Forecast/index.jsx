import React, { useMemo } from 'react'

import './styles.scss';

const Forecast = ({ date, icon, temperature, description }) => {
  const title = useMemo(() => date.replace(/-/g, '/').slice(0, -9), [date]);

  const image = useMemo(() => `http://openweathermap.org/img/wn/${icon}@2x.png`, [icon]);

  const temp = useMemo(() => Math.round(temperature), [temperature]);
  
  return (
    <div className="forecast-info">
      <div className="forecast-date">
        {title}
      </div>
      <img
        className="city-icon"
        src={image}
        alt={description}
      />
      <div className="forecast-temp">
        {temp}
        <sup>&deg;</sup>C
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Forecast;
