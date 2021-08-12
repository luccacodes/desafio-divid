import React, { useMemo } from 'react'

import './styles.scss';

const Card = ({ temperature, city, date, icon, description }) => {
  const temp = useMemo(() => Math.round(temperature), [temperature]);

  const day = useMemo(() => date.replace(/-/g, '/'), [date]);

  const image = useMemo(() => `http://openweathermap.org/img/wn/${icon}@2x.png`, [icon]);

  return (
    <div className="city-container">
      <div className="city-temp">
        {temp}
        <sup>&deg;</sup>
      </div>
      <div className="city-info">
        <div className="city-name">
          {city}
        </div>
        <div className="city-date">
          {day}
        </div>
      </div>
      <div className="city-icon">
        <img
          className="icon"
          src={image}
          alt={description}
        />
        <p className="icon-description">{description}</p>
      </div>
    </div>
  )
}

export default Card;
