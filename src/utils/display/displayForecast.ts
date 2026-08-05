import type { DailyForecast } from "../../interface/forecastDataInterface.ts";

export function displayForecast (dailyForecast: DailyForecast[]) {
    const day1 = dailyForecast[0];
    const day1HTML = document.querySelector('.day1') as HTMLParagraphElement;
    const dayOfTheWeek1 = document.querySelector('.dayOfWeek1') as HTMLHeadingElement;
    if(day1) {
        day1HTML.innerHTML = `${Math.round(day1.minTemp)}°C / ${Math.round(day1.maxTemp)}°C`;

        const dateObject = new Date(day1.date);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfTheWeek = dayNames[dateObject.getDay()];

        dayOfTheWeek1.innerText = `${dayOfTheWeek}`;
    }

    const day2 = dailyForecast[1];
    const day2HTML = document.querySelector('.day2') as HTMLParagraphElement;
    const dayOfTheWeek2 = document.querySelector('.dayOfTheWeek2') as HTMLHeadingElement;
    if(day2) {
        day2HTML.innerHTML = `${Math.round(day2.minTemp)}°C / ${Math.round(day2.maxTemp)}°C`;

        const dateObject = new Date(day2.date);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfTheWeek = dayNames[dateObject.getDay()];

        dayOfTheWeek2.innerText = `${dayOfTheWeek}`;
    }

    const day3 = dailyForecast[2];
    const day3HTML = document.querySelector('.day3') as HTMLParagraphElement;
    const dayOfTheWeek3 = document.querySelector('.dayOfTheWeek3') as HTMLHeadingElement;
    if(day3) {
        day3HTML.innerHTML = `${Math.round(day3.minTemp)}°C / ${Math.round(day3.maxTemp)}°C`;

        const dateObject = new Date(day3.date);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfTheWeek = dayNames[dateObject.getDay()];

        dayOfTheWeek3.innerText = `${dayOfTheWeek}`;
    }

    const day4 = dailyForecast[3];
    const day4HTML = document.querySelector('.day4') as HTMLParagraphElement;
    const dayOfTheWeek4 = document.querySelector('.dayOfTheWeek4') as HTMLHeadingElement;
    if(day4) {
        day4HTML.innerHTML = `${Math.round(day4.minTemp)}°C / ${Math.round(day4.maxTemp)}°C`;

        const dateObject = new Date(day4.date);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfTheWeek = dayNames[dateObject.getDay()];

        dayOfTheWeek4.innerText = `${dayOfTheWeek}`;
    }

    const day5 = dailyForecast[4];
    const day5HTML = document.querySelector('.day5') as HTMLParagraphElement;
    const dayOfTheWeek5 = document.querySelector('.dayOfTheWeek5') as HTMLHeadingElement;
    if(day5) {
        day5HTML.innerHTML = `${Math.round(day5.minTemp)}°C / ${Math.round(day5.maxTemp)}°C`;

        const dateObject = new Date(day5.date);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfTheWeek = dayNames[dateObject.getDay()];

        dayOfTheWeek5.innerText = `${dayOfTheWeek}`;
    }

    const forecastSection = document.querySelector('.forecast') as HTMLElement;
    forecastSection.style.display = 'block'
}