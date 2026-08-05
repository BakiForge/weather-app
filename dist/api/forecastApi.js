import { toggleSearchForecast } from "../utils/toggleSearch.js";
import { displayForecast } from "../utils/display/displayForecast.js";
const apiKey = "c2892393883b3c8aeeb340b71415dbe9";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";
toggleSearchForecast();
getForecastData();
export async function getForecast(city) {
    try {
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
            dailyForecast.push({
                date: day,
                minTemp: minTemp,
                maxTemp: maxTemp
            });
        });
        displayForecast(dailyForecast);
        localStorage.setItem('forecastData', JSON.stringify(dailyForecast));
    }
    catch (error) {
        console.error(error);
    }
}
function getForecastData() {
    const savedData = localStorage.getItem('forecastData');
    if (!savedData) {
        return null;
    }
    try {
        const dataObject = JSON.parse(savedData);
        displayForecast(dataObject);
    }
    catch (error) {
        console.error(error);
    }
}
//# sourceMappingURL=forecastApi.js.map