import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QutoeService {
    async getRandomQuote() {
        const response = await api.get('api/quotes')
        console.log('Got random quote', response.data)
        const newQuote = new Quote(response.data)
        AppState.quotes= newQuote
    }
}

export const quoteService = new QutoeService()