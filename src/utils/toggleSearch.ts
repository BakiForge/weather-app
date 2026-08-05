import { getWeather } from "../api/weatherApi.js";
import { getAirQuality } from "../api/airQualityApi.js";
import { getForecast } from "../api/forecastApi.js";

export function toggleSearch (): void {
    const searchBox = document.getElementById('search-box') as HTMLInputElement;
    const searchButton = document.querySelector('.search-button') as HTMLButtonElement;

        searchButton.addEventListener('click', ()=>{
                getWeather(searchBox.value);
        });
}

export function toggleSearchForAirQuality (): void {
  const searchBox = document.getElementById('search-box') as HTMLInputElement;
  const searchButton = document.querySelector('.search-button') as HTMLButtonElement;
        searchButton.addEventListener('click', ()=>{
            getAirQuality(searchBox.value);
        })
}

export function toggleSearchForecast () {
    const searchBox = document.getElementById('search-box') as HTMLInputElement;
    const searchButton = document.querySelector('.search-button') as HTMLButtonElement;
    searchButton.addEventListener('click', ()=>{
        getForecast(searchBox.value);
    });
}