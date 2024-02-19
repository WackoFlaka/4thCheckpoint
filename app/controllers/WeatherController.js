import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWeather() {
    const weather = AppState.weather
    setHTML('weather', weather.weatherCardTemplate)
}

export class WeatherController {
    constructor() {
        console.log('Weather Controller has been set.');
        AppState.on('weather', _drawWeather)
        this.getWeather()
    }
    
    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.error();
        }
    }
    
    async changeTemp() {
        try {
            await weatherService.changeTemp()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}