import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
    const quote = AppState.quotes
    setHTML('quote', quote.QuoteTemplateCard)
}

export class QuoteController {
    constructor() {
        console.log('Quote Controller is set.');
        AppState.on('quotes', _drawQuote)
        this.getRandomQuote()
    }
    
    async getRandomQuote() {
        try {
            await quoteService.getRandomQuote()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}