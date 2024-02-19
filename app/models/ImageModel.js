export class ImageModel {
    constructor(data) {
        this.url = data.largeImgUrl || data.imgUrl
        this.author = data.author
        
    }
    
    get authorName() {
        return `
        <div class="authorImgCard">
        <h1 class="text-light fs-4 p-4">Image by <br>${this.author}</h1>
        </div>
        `
    }
}