import type { forecastData, DailyForecast } from "../interface/forecastDataInterface.ts";

const apiKey: string = "c2892393883b3c8aeeb340b71415dbe9";
const apiUrl: string = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";

const searchBox = document.getElementById('search-box') as HTMLInputElement;
const searchButton = document.querySelector('.search-button');

if(searchBox && searchButton) {
    searchButton.addEventListener('click', ()=>{
        getForecast(searchBox.value);
    });
}

export async function getForecast (city: string) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    const forecastList: forecastData[]  = data.list;
    const dailyForecast:  DailyForecast[] = [];

    const days: string[] = [];
    forecastList.forEach((forecast)=>{
        const day = forecast.dt_txt.split(" ")[0];
        if(!days.includes(String(day))) {
            days.push(String(day));
        }
    });

    days.forEach((day)=> {
        let minTemp = +Infinity;
        let maxTemp = -Infinity;
        forecastList.forEach((forecast) => {
            if(forecast.dt_txt.includes(day)) {
                if(forecast.main.temp_min < minTemp) {
                    minTemp = forecast.main.temp_min;
                }
                if(forecast.main.temp_max > maxTemp) {
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
    const day1 = dailyForecast[0];
    const day1HTML = document.querySelector('.day1') as HTMLParagraphElement;
    if(day1 && day1HTML) {
        day1HTML.innerHTML = `${Math.round(day1.minTemp)}°C / ${Math.round(day1.maxTemp)}°C`;
    }

    const day2 = dailyForecast[1];
    const day2HTML = document.querySelector('.day2') as HTMLParagraphElement;
    if(day2 && day2HTML) {
        day2HTML.innerHTML = `${Math.round(day2.minTemp)}°C / ${Math.round(day2.maxTemp)}°C`;
    }

    const day3 = dailyForecast[2];
    const day3HTML = document.querySelector('.day3') as HTMLParagraphElement;
    if(day3 && day3HTML) {
        day3HTML.innerHTML = `${Math.round(day3.minTemp)}°C / ${Math.round(day3.maxTemp)}°C`;
    }

    const day4 = dailyForecast[3];
    const day4HTML = document.querySelector('.day4') as HTMLParagraphElement;
    if(day4 && day4HTML) {
        day4HTML.innerHTML = `${Math.round(day4.minTemp)}°C / ${Math.round(day4.maxTemp)}°C`;
    }

    const day5 = dailyForecast[4];
    const day5HTML = document.querySelector('.day5') as HTMLParagraphElement;
    if(day5 && day5HTML) {
        day5HTML.innerHTML = `${Math.round(day5.minTemp)}°C / ${Math.round(day5.maxTemp)}°C`;
    }

    const forecastSection = document.querySelector('.forecast') as HTMLElement;
    if(forecastSection) {
        forecastSection.style.display = 'block';
    }
}