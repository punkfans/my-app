import React from 'react';
import Todo from '../Todo/Todo';
import todoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todoStore.getAll()
        }
    }

    componentWillMount() {
        todoStore.on('change', () => {
            this.setState({
                todos: todoStore.getAll()
            });
        });
    }

    addNewTodo() {
        let text = document.getElementById('newTodo').value;
        TodoActions.addTodo(text);
        document.getElementById('newTodo').value = '';
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} />
                })}
                <div>
                    <input id="newTodo"/>
                    <button onClick={this.addNewTodo.bind(this)}>Add New Toto</button>
                </div>
            </div>
        );
    }
}