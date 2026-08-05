import { toggleSearchForAirQuality } from "../utils/toggleSearch.js";
import { displayAirQuality } from "../utils/display/displayAirQuality.js";
const apiKey = "232747ab67cc60263e6079b53bbbd65f19f53765";
const apiUrl = "https://api.waqi.info/feed/";
toggleSearchForAirQuality();
getAqiData();
export async function getAirQuality(city) {
    const response = await fetch(apiUrl + city + `/?token=${apiKey}`);
    const data = await response.json();
    const airQuality = data.data.aqi;
    displayAirQuality(Number(airQuality));
    localStorage.setItem('aqiData', JSON.stringify(airQuality));
}
function getAqiData() {
    const savedData = localStorage.getItem('aqiData');
    if (!savedData) {
        return null;
    }
    const dataObject = JSON.parse(savedData);
    displayAirQuality(Number(dataObject));
}
//# sourceMappingURL=airQualityApi.js.map