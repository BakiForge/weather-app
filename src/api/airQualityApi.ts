import type { airQuality } from "../interface/airQualityInterface.ts";

const apiKey: string = "232747ab67cc60263e6079b53bbbd65f19f53765";
const apiUrl: string = "https://api.waqi.info/feed/";

const searchBox = document.getElementById('search-box') as HTMLInputElement;
const searchButton = document.querySelector('.search-button');
if(searchBox && searchButton) {
    searchButton.addEventListener('click', ()=>{
        getAirQuality(searchBox.value);
    })
}

export async function getAirQuality (city: string) {
    const response = await fetch(apiUrl + city + `/?token=${apiKey}`);
    const data = await response.json();

    const airQuality: airQuality = data.data.aqi;
    const airQualityNumber = document.querySelector('.aqi-number');
    if(airQualityNumber) {
        airQualityNumber.innerHTML = `${airQuality}`;
    }

    const aqiStatusHTML = document.querySelector('.aqi-status') as HTMLSpanElement;
    const progressBar = document.querySelector('.progress') as HTMLDivElement;

    if(Number(airQuality) <= 50 && aqiStatusHTML && progressBar) {
      aqiStatusHTML.style.background = '#2ecc71';
      aqiStatusHTML.innerText = 'Good';
      progressBar.style.width = '16.6%';
    } else if(Number(airQuality) <= 100 && aqiStatusHTML && progressBar) {
        aqiStatusHTML.style.background = '#ffde33';
        aqiStatusHTML.innerText = 'Moderate';
        progressBar.style.width = '33.2%';
    } else if(Number(airQuality) <= 150 && aqiStatusHTML && progressBar) {
        aqiStatusHTML.style.background = '#f93';
        aqiStatusHTML.innerHTML = 'Unhealthy';
        progressBar.style.width = '49.8%';
    } else if(Number(airQuality) <= 200 && aqiStatusHTML && progressBar) {
        aqiStatusHTML.style.background = '#c03';
        aqiStatusHTML.innerText = 'Unhealthy';
        progressBar.style.width = '66.4%';
    } else if(Number(airQuality) <= 300 && aqiStatusHTML && progressBar) {
        aqiStatusHTML.style.background = '#609';
        aqiStatusHTML.innerText = 'Very Unhealthy';
        progressBar.style.width = '83%';
    } else if(Number(airQuality) > 300) {
        aqiStatusHTML.style.background = '#8a0099';
        aqiStatusHTML.innerText = 'Hazardous';
        progressBar.style.width = '100%';
    }

    const airQualitySection = document.querySelector('.air-quality') as HTMLElement;
    airQualitySection.style.display = 'block';
}