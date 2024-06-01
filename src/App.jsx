import React, { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const apiKey = '9f6650c297fba7c69df252fcfb7a058e'; // Замените на ваш API-ключ
            const { data: weatherData } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric',
                    lang: 'ru'
                }
            });
            setWeather(weatherData);

            const { data: forecastData } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric',
                    lang: 'ru'
                }
            });
            setForecast(forecastData);

        } catch (error) {
            toast.error('Город не найден, проверьте правильность его написания!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <h1>Погода</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Введите город"
                />
                <button type="submit">Поиск</button>
            </form>
            {loading && <p>Загрузка...</p>}
            <ToastContainer />
            {weather && <Weather weather={weather} forecast={forecast} />}
        </div>
    );
};

export default App;
