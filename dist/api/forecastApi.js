const apiKey = "c2892393883b3c8aeeb340b71415dbe9";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";
const searchBox = document.getElementById('search-box');
const searchButton = document.querySelector('.search-button');
if (searchBox && searchButton) {
    searchButton.addEventListener('click', () => {
        getForecast(searchBox.value);
    });
}
export async function getForecast(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    const forecastList = data.list;
    const dailyForecast = [];
    const days = [];
    forecastList.forEach((forecast) => {
        const day = forecast.dt_txt.split(" ")[0];
        if (!days.includes(String(day))) {
            days.push(String(day));
        }
    });
    days.forEach((day) => {
        let minTemp = +Infinity;
        let maxTemp = -Infinity;
        forecastList.forEach((forecast) => {
            if (forecast.dt_txt.includes(day)) {
                if (forecast.main.temp_min < minTemp) {
                    minTemp = forecast.main.temp_min;
                }
                if (forecast.main.temp_max > maxTemp) {
                    maxTemp = forecast.main.temp_max;
                }
            }
        });
    });
    const day1 = dailyForecast[0];
    const day1HTML = document.querySelector('.day1');
    if (day1 && day1HTML) {
        day1HTML.innerHTML = `${Math.round(day1.main.temp_max)}°C / ${Math.round(day1.main.temp_min)}°C`;
    }
    const day2 = dailyForecast[1];
    const day2HTML = document.querySelector('.day2');
    if (day2 && day2HTML) {
        day2HTML.innerHTML = `${Math.round(day2.main.temp_max)}°C / ${Math.round(day2.main.temp_min)}°C`;
    }
    const day3 = dailyForecast[2];
    const day3HTML = document.querySelector('.day3');
    if (day3 && day3HTML) {
        day3HTML.innerHTML = `${Math.round(day3.main.temp_max)}°C / ${Math.round(day3.main.temp_min)}°C`;
    }
    const day4 = dailyForecast[3];
    const day4HTML = document.querySelector('.day4');
    if (day4 && day4HTML) {
        day4HTML.innerHTML = `${Math.round(day4.main.temp_max)}°C / ${Math.round(day4.main.temp_min)}°C`;
    }
    const day5 = dailyForecast[4];
    const day5HTML = document.querySelector('.day5');
    if (day5 && day5HTML) {
        day5HTML.innerHTML = `${Math.round(day5.main.temp_max)}°C / ${Math.round(day5.main.temp_min)}°C`;
    }
    const forecastSection = document.querySelector('.forecast');
    if (forecastSection) {
        forecastSection.style.display = 'block';
    }
}
//# sourceMappingURL=forecastApi.js.map