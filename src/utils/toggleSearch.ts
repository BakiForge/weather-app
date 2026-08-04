import { getWeather } from "../api/weatherApi.js";

export function toggleSearch (): void {
    const searchBox = document.getElementById('search-box') as HTMLInputElement;
    const searchButton = document.querySelector('.search-button') as HTMLButtonElement;

        searchButton.addEventListener('click', ()=>{
                getWeather(searchBox.value);
        });
}