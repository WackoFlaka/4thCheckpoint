import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {
    async getTODO() {
        const response = await api.get('api/todos')
        console.log('Recieved all todos', response.data)
        const newTODO = response.data.map(todoPOJO => new Todo(todoPOJO))
        console.log('mapped over todos', newTODO)
        AppState.todos = newTODO
    }
    
    async createTodo(formData) {
        const response = await api.post('api/todos', formData)
        console.log('Creating todo..', response.data)
        const newTodo = new Todo(response.data)
        AppState.todos.push(newTodo)
    }
    
    async removeTodo(id) {
        console.log(id)
        const response = await api.delete(`api/todos/${id}`)
        const findIndex = AppState.todos.findIndex(todo => todo.id = id)
        console.log('Deleting..', response.data);
        if(findIndex == -1) {
            throw new error('Returned -1. ERROR!')
        }
        AppState.todos.splice(findIndex, 1)
    }
    
    async check(id) {
        const index = AppState.todos.findIndex(todo => todo.id == id)
        if(index == -1) {
            throw new error('ERROR. Returned -1')
        }
        
        const foundTodo = AppState.todos[index]
        const update = { completed: !foundTodo.completed}
        
        const response = await api.put(`api/todos/${id}`, update)
        const updatedTodo = new Todo(response.data)
        AppState.todos.splice(index, 1, updatedTodo)
    }
}

export const todoService = new TodoService()