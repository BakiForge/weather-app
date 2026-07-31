const cityName = document.querySelector('.city-name');
if (cityName) {
    cityName.innerHTML = data.name;
}
const temperature = document.querySelector('.temperature');
if (temperature) {
    temperature.innerHTML = data.main.temp;
}
const feelsLike = document.querySelector('.feels-like');
if (feelsLike) {
    feelsLike.innerHTML = `${data.main.feels_like}`;
}
const humidity = document.querySelector('.humidity');
if (humidity) {
    humidity.innerHTML = `${data.main.humidity}%`;
}
const wind = document.querySelector('.wind');
if (wind) {
    wind.innerHTML = `${data.wind.speed} km/h`;
}
const pressure = document.querySelector('.pressure');
if (pressure) {
    pressure.innerHTML = `${data.main.pressure} hPa`;
}
const visibility = document.querySelector('.visibility');
if (visibility) {
    visibility.innerHTML = `${data.visibility} km`;
}
export {};
//# sourceMappingURL=showWeatherInfo.js.map