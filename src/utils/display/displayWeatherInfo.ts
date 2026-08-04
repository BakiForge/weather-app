export function displayWeatherInfo (weatherData: {
    name: string, description: string, temp: number, feels_like: number,
    humidity: number, windSpeed: number, pressure: number, visibility: number
}): void {
    const cityName= document.querySelector('.city-name') as HTMLHeadingElement;
        cityName.innerHTML = weatherData.name;

    const description = document.querySelector('.description') as HTMLParagraphElement;
        description.innerHTML = weatherData.description.toUpperCase();

    const temperature = document.querySelector('.temperature') as HTMLHeadingElement;
        temperature.innerHTML =  `${Math.round(weatherData.temp)}°C`;

    const feelsLike = document.querySelector('.feels-like') as HTMLParagraphElement;
        feelsLike.innerHTML =  `${Math.round(weatherData.feels_like)}°C`;

    const humidity = document.querySelector('.humidity') as HTMLParagraphElement;
        humidity.innerHTML =  `${weatherData.humidity}%`;

    const wind = document.querySelector('.wind') as HTMLParagraphElement;
        wind.innerHTML =  `${weatherData.windSpeed} km/h`;

    const pressure = document.querySelector('.pressure') as HTMLParagraphElement;
        pressure.innerHTML =  `${weatherData.pressure} hPa`;

    const visibility = document.querySelector('.visibility') as HTMLParagraphElement;
        visibility.innerHTML =  `${(weatherData.visibility)/1000} km`;
}