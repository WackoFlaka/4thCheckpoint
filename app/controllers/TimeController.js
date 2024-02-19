import { setHTML } from "../utils/Writer.js";

function _drawTime() {
    const date = new Date().toLocaleTimeString()
    let html = ''
    html = date
    setHTML('time', html)
}

export class TimeController {
    
    
    constructor() {
        console.log('Time Controller has been set.');
        setInterval(_drawTime, 1000)
    }
    
}