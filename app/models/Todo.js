import { generateId } from "../utils/GenerateId.js"

export class Todo {
    constructor(data) {
        this.id = data._id || data.id
        this.completed = data.completed || false
        this.creatorId = data.creatorId
        this.description = data.description
    }
    
    get TodoListTemplate() {
        return /*html*/ `
        <div class="mb-3 d-flex justify-content-between align-items-center">
            ${this.checkbox}
            <p class="m-0 ${this.dash}" id="list">${this.description}</p>
            <button type="button" class="text-white btn btn-danger"><span class="mdi mdi-trash-can" onclick="app.TodoController.removeTodo('${this.id}')"></span></button>
        </div>
        `
    }
    
    get checkbox() {
        return /*html*/ `
        <input type="checkbox" onchange="app.TodoController.check('${this.id}')" ${this.completed ? 'checked' : ''}>
        `
    }
    
    get dash() {
        if(this.completed == true) {
            return 'text-decoration-line-through'
        }
        
        return ''
    }
}