import React from 'react';
import TodoAction from '../../actions/TodoActions';

export default class Todo extends React.Component {

    deleteTodo (id) {
        TodoAction.deleteTodo(id);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.todo.text}</li>
                    <button onClick={this.deleteTodo.bind(this, this.props.todo.id)}>Delete!</button>
                </ul>
            </div>
        )
    }
}