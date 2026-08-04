export function displayAirQuality(airQuality) {
    const airQualityNumber = document.querySelector('.aqi-number');
    airQualityNumber.innerHTML = `${airQuality}`;
    const aqiStatusHTML = document.querySelector('.aqi-status');
    const progressBar = document.querySelector('.progress');
    if (airQuality <= 50) {
        aqiStatusHTML.style.background = '#2ecc71';
        aqiStatusHTML.innerText = 'Good';
        progressBar.style.width = '16.6%';
    }
    else if (airQuality <= 100) {
        aqiStatusHTML.style.background = '#ffde33';
        aqiStatusHTML.innerText = 'Moderate';
        progressBar.style.width = '33.2%';
    }
    else if (airQuality <= 150) {
        aqiStatusHTML.style.background = '#f93';
        aqiStatusHTML.innerHTML = 'Unhealthy';
        progressBar.style.width = '49.8%';
    }
    else if (airQuality <= 200) {
        aqiStatusHTML.style.background = '#c03';
        aqiStatusHTML.innerText = 'Unhealthy';
        progressBar.style.width = '66.4%';
    }
    else if (airQuality <= 300) {
        aqiStatusHTML.style.background = '#609';
        aqiStatusHTML.innerText = 'Very Unhealthy';
        progressBar.style.width = '83%';
    }
    else if (airQuality > 300) {
        aqiStatusHTML.style.background = '#8a0099';
        aqiStatusHTML.innerText = 'Hazardous';
        progressBar.style.width = '100%';
    }
    const airQualitySection = document.querySelector('.air-quality');
    airQualitySection.style.display = 'block';
}
//# sourceMappingURL=displayAirQuality.js.map