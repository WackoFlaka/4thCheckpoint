import { AppState } from "../AppState.js"
import { ImageModel } from "../models/ImageModel.js"
import { api } from "./AxiosService.js"

class ImageService {
    async getRandomImage() {
        const response = await api.get('api/images/')
        console.log('Recieved random image', response.data)
        const newImage = new ImageModel(response.data)
        AppState.images = newImage
    }
}

export const imageService = new ImageService()