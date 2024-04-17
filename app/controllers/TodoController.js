import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawForm() {
    if(!AppState.account) {
        return
    }
    
    const form = document.getElementById('todoForm')
    form.classList.remove('d-none')
}

function _drawTODOs() {
    const todos = AppState.todos
    let html = ''
    todos.forEach(todo => html += todo.TodoListTemplate)
    console.log("inside appstate",todos)
    console.log(html)
    setHTML('todoList', html)
}

function _drawTotalTODOs() {
    const length = AppState.todos.filter(todo => todo.completed == false)
    setHTML('total', length.length)
}

export class TodoController {
    constructor() {
        console.log('Todo Controller has been set.')
        AppState.on('todos', _drawTODOs)
        AppState.on('todos', _drawTotalTODOs)
        
        AppState.on('account', _drawForm)
        AppState.on('account', this.getTODO)
    }
    
    async getTODO() {
        try {
            await todoService.getTODO()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
    
    async createTodo() {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await todoService.createTodo(formData)
            Pop.success('Created Todo!')
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
    
    async removeTodo(id) {
        try {
            const wantsToDelete = await Pop.confirm('Are you wanting to delete this todo?')
            if(!wantsToDelete) {
                return
            }
            Pop.success('Removed Todo')
            await todoService.removeTodo(id)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
    
    async check(id) {
        try {
            await todoService.check(id)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}