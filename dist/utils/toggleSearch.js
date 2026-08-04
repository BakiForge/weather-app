import { getWeather } from "../api/weatherApi.js";
export function toggleSearch() {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        getWeather(searchBox.value);
    });
}
//# sourceMappingURL=toggleSearch.js.map