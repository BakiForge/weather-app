export function displayWeatherIcons(weatherData) {
    const weatherIcon = document.querySelector('.weather-icon');
    if (weatherData.description === 'Clear') {
        weatherIcon.src = 'src/assets/sunny.png';
    }
    else if (weatherData.description === 'Clouds') {
        weatherIcon.src = 'src/assets/clouds.png';
    }
    else if (weatherData.description === 'Rain') {
        weatherIcon.src = 'src/assets/rain.png';
    }
    else if (weatherData.description === 'Drizzle') {
        weatherIcon.src = 'src/assets/drizzle.png';
    }
    else if (weatherData.description === 'Mist') {
        weatherIcon.src = 'src/assets/mist.png';
    }
    else if (weatherData.description === 'Wind') {
        weatherIcon.src = 'src/assets/wind.png';
    }
    else if (weatherData.description === 'Snow') {
        weatherIcon.src = 'src/assets/snow.png';
    }
    else if (weatherData.description === 'Humidity') {
        weatherIcon.src = 'src/assets/humidity.png';
    }
}
//# sourceMappingURL=displayWeatherIcons.js.map