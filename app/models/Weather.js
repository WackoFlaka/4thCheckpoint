export class Weather {
    constructor(data) {
        this.weather = data.weather[0].description || data.weather
        this.main = data.main.temp
        this.celsius = false
    }
    
    get weatherCardTemplate() {
        return /*html*/ `
        <p class="text-light fs-2">${this.ToggleTemp}</p>
        <p class="text-light fs-2">${this.weather}</p>
        `
    }
    
   /*  get Fahrenheit() {
        return Math.ceil(1.8 * (`${this.main}` - 273.15) + 32) + ' F'
    }
    
    get Celsius() {
        return Math.ceil(this.main - 273.15) + ' C'
    } */
    
    get ToggleTemp() {
        if(this.celsius == false) {
            return Math.ceil(1.8 * (`${this.main}` - 273.15) + 32) + ' F'
        }
        return Math.ceil(this.main - 273.15) + ' C'
    }
}