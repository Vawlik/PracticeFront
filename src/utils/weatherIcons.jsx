export const getWeatherIcon = (description) => {
    switch (description) {
        case 'ясно':
            return '☀️';
        case 'облачно с прояснениями':
            return '⛅';
        case 'пасмурно':
            return '☁️';
        case 'дождь':
            return '🌧️';
        case 'гроза':
            return '⛈️';
        case 'снег':
            return '❄️';
        default:
            return '🌥️';
    }
};