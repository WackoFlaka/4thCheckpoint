export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }
    
    get QuoteTemplateCard() {
        return /*html*/ `
        <div class="quote-card">
            <h1 class="text-white text-center fs-2">"${this.content}"</h1>
            <div class="touch">
                <p class="text-center pb-5 text-light">- ${this.author}</p>
            </div>
        </div>
        
        `
    }
}