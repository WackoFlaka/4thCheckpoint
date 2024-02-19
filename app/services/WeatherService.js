import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const response = await api.get('api/weather')
        console.log('Got the weather of Boise', response.data)
        const newWeather = new Weather(response.data)
        AppState.weather = newWeather
        console.log(newWeather)
    }
    
    async changeTemp() {
        const tempFound = AppState.weather
        const tempUpdate = tempFound.celsius = !tempFound.celsius
        //const response = await api.put('api/weather', tempUpdate)
       console.log(tempUpdate)
        
    }
}

export const weatherService = new WeatherService()