const apiKey = "c2892393883b3c8aeeb340b71415dbe9";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=belgrade&appid=c2892393883b3c8aeeb340b71415dbe9&units=metric";
export async function getForecast() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const forecastList = data.list;
    const dailyForecast = [];
    forecastList.forEach((forecast) => {
        if (forecast.dt_txt.includes('12:00:00')) {
            dailyForecast.push(forecast);
        }
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
}
//# sourceMappingURL=forecastApi.js.map