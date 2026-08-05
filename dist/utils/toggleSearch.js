import { getWeather } from "../api/weatherApi.js";
import { getAirQuality } from "../api/airQualityApi.js";
import { getForecast } from "../api/forecastApi.js";
export function toggleSearch() {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        getWeather(searchBox.value);
    });
}
export function toggleSearchForAirQuality() {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        getAirQuality(searchBox.value);
    });
}
export function toggleSearchForecast() {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        getForecast(searchBox.value);
    });
}
//# sourceMappingURL=toggleSearch.js.map