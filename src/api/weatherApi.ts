import type {weatherData} from "../interface/weatherDataInterface.ts";

const apiKey: string = "c2892393883b3c8aeeb340b71415dbe9";
const apiUrl: string = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.getElementById('search-box') as HTMLInputElement;
const searchButton = document.querySelector('.search-button');

if(searchButton) {
    searchButton.addEventListener('click', ()=>{
        if(searchBox) {
            getWeather(searchBox.value);
        }
    });
}



export async function getWeather (city: string) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        let data = await response.json();

        let weatherData: weatherData = {
            name: data.name,
            description: data.weather[0].main,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            visibility: data.visibility
        };

        const cityName= document.querySelector('.city-name');
        if(cityName) {
            cityName.innerHTML = weatherData.name;
        }

        const description = document.querySelector('.description');
        if(description) {
            description.innerHTML = weatherData.description.toUpperCase();
        }

        const temperature = document.querySelector('.temperature');
        if(temperature) {
            temperature.innerHTML =  `${Math.round(weatherData.temp)}°C`;
        }

        const feelsLike = document.querySelector('.feels-like');
        if(feelsLike) {
            feelsLike.innerHTML =  `${Math.round(weatherData.feels_like)}°C`;
        }

        const humidity = document.querySelector('.humidity');
        if(humidity) {
            humidity.innerHTML =  `${weatherData.humidity}%`;
        }

        const wind = document.querySelector('.wind');
        if(wind) {
            wind.innerHTML =  `${weatherData.windSpeed} km/h`
        }

        const pressure = document.querySelector('.pressure');
        if(pressure) {
            pressure.innerHTML =  `${weatherData.pressure} hPa`;
        }

        const visibility = document.querySelector('.visibility');
        if(visibility) {
            visibility.innerHTML =  `${(weatherData.visibility)/1000} km`;
        }

        const weatherIcon = document.querySelector('.weather-icon') as HTMLImageElement;
        if(weatherIcon) {
            if(weatherData.description === 'Clear') {
                weatherIcon.src = 'src/assets/sunny.png';
            } else if(weatherData.description === 'Clouds') {
                weatherIcon.src = 'src/assets/clouds.png';
            } else if(weatherData.description === 'Rain') {
                weatherIcon.src = 'src/assets/rain.png';
            } else if(weatherData.description === 'Drizzle') {
                weatherIcon.src = 'src/assets/drizzle.png';
            } else if(weatherData.description === 'Mist') {
                weatherIcon.src = 'src/assets/mist.png';
            } else if(weatherData.description === 'Wind') {
                weatherIcon.src = 'src/assets/wind.png';
            } else if(weatherData.description === 'Snow') {
                weatherIcon.src = 'src/assets/snow.png';
            } else if(weatherData.description === 'Humidity') {
                weatherIcon.src = 'src/assets/humidity.png';
            }
        }

    const weatherMainSection = document.querySelector('.current-weather') as HTMLDivElement;
    weatherMainSection.style.display = 'block';
}
