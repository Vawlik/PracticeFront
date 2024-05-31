import React from 'react';
import './Weather.css';
import Forecast from './Forecast';
import { getWeatherIcon } from '../utils/weatherIcons';

const Weather = ({ weather, forecast }) => {
    const { name, main, weather: weatherDetails } = weather;

    return (
        <div className="weather">
            <h2>Сегодня</h2>
            <div className="current-weather">
                <div className="current-weather-icon">{getWeatherIcon(weatherDetails[0].description)}</div>
                <div className="current-weather-details">
                    <p className="city-name">{name}</p>
                    <div className="temperature">
                        <p>Температура: {main.temp}°C</p>
                        <p>Ощущается как: {main.feels_like}°C</p>
                        <p>Влажность: {main.humidity}%</p>
                    </div>
                </div>
            </div>
            {forecast && <Forecast forecast={forecast} />}
        </div>
    );
};

export default Weather;
