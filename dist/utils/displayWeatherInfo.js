export function displayWeatherInfo(weatherData) {
    const cityName = document.querySelector('.city-name');
    cityName.innerHTML = weatherData.name;
    const description = document.querySelector('.description');
    description.innerHTML = weatherData.description.toUpperCase();
    const temperature = document.querySelector('.temperature');
    temperature.innerHTML = `${Math.round(weatherData.temp)}°C`;
    const feelsLike = document.querySelector('.feels-like');
    feelsLike.innerHTML = `${Math.round(weatherData.feels_like)}°C`;
    const humidity = document.querySelector('.humidity');
    humidity.innerHTML = `${weatherData.humidity}%`;
    const wind = document.querySelector('.wind');
    wind.innerHTML = `${weatherData.windSpeed} km/h`;
    const pressure = document.querySelector('.pressure');
    pressure.innerHTML = `${weatherData.pressure} hPa`;
    const visibility = document.querySelector('.visibility');
    visibility.innerHTML = `${(weatherData.visibility) / 1000} km`;
}
//# sourceMappingURL=displayWeatherInfo.js.map