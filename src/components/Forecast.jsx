import React from 'react';
import './Forecast.css';
import { getWeatherIcon } from '../utils/weatherIcons';

const Forecast = ({ forecast }) => {
    const dailyForecast = forecast.list.filter(reading => reading.dt_txt.includes("12:00:00"));

    return (
        <div className="forecast">
            <h3>Прогноз на 5 дней:</h3>
            <div className="forecast-grid">
                {dailyForecast.map((reading, index) => (
                    <div key={index} className="forecast-item">
                        <p>{new Date(reading.dt * 1000).toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                        <p className="forecast-icon">{getWeatherIcon(reading.weather[0].description)}</p>
                        <p className="forecast-temp">{Math.round(reading.main.temp)}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
