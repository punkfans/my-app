import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 123,
                text: 'do something!'
            },
            {
                id: 121233,
                text: 'Algorithm!!'
            }
        ];
    }

    getAll() {
        return this.todos;
    }

    addTodo(text) {
        this.todos.push({
            id: Date.now(),
            text
        });

        this.emit('change');
    }

    deleteTodo(id) {
        for(let i = 0; i < this.todos.length; i++) {
            if(this.todos[i].id === id) {
                this.todos.splice(i, 1);
                break;
            }
        }

        this.emit('change');
    }

    handleActions(action) {
        switch (action.type) {
            case 'CREATE_TODO':
                this.addTodo(action.text);
                break;
            case 'DELETE_TODO':
                this.deleteTodo(action.id);
                break;
            default:
                break;
        }
    }

}

let todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;