import type { airQuality } from "../interface/airQualityInterface.ts";
import { toggleSearchForAirQuality } from "../utils/toggleSearch.js";
import { displayAirQuality } from "../utils/display/displayAirQuality.js";

const apiKey: string = "232747ab67cc60263e6079b53bbbd65f19f53765";
const apiUrl: string = "https://api.waqi.info/feed/";

toggleSearchForAirQuality();

export async function getAirQuality (city: string) {
    const response = await fetch(apiUrl + city + `/?token=${apiKey}`);
    const data = await response.json();

    const airQuality: airQuality = data.data.aqi;

    displayAirQuality(Number(airQuality));
}