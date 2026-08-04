import { displayCurrentDate } from "../utils/display/displayCurrentDate.js";
import { displayWeatherIcons } from "../utils/display/displayWeatherIcons.js";
import { displaySectionsHTML } from "../utils/display/displaySectionsHTML.js";
import { displayWeatherInfo } from "../utils/display/displayWeatherInfo.js";
import { toggleSearch } from "../utils/toggleSearch.js";
const apiKey = "c2892393883b3c8aeeb340b71415dbe9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
toggleSearch();
export async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    let weatherData = {
        name: data.name,
        description: data.weather[0].main,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed,
        visibility: data.visibility
    };
    displayWeatherInfo({
        name: weatherData.name, description: weatherData.description, temp: weatherData.temp, feels_like: weatherData.feels_like,
        humidity: weatherData.humidity, windSpeed: weatherData.windSpeed, pressure: weatherData.pressure, visibility: weatherData.visibility
    });
    displayWeatherIcons({ description: weatherData.description });
    displaySectionsHTML();
    displayCurrentDate();
}
//# sourceMappingURL=weatherApi.js.map