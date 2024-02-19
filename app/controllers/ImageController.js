import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawRandomImage() {
    const image = AppState.images
    document.body.style.backgroundImage = `url(${image.url})`
    setHTML('imgAuthor', image.authorName)
}

export class ImageController {
    constructor() {
        console.log('Image Controller has been set.');
        AppState.on('images', _drawRandomImage)
        this.getRandomImage()
    }
    
    async getRandomImage() {
        try {
            await imageService.getRandomImage()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}