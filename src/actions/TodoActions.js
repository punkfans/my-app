import dispatcher from '../Dispatcher';

function addTodo (text) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    });
}

function deleteTodo (id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    });
}

export default {
    addTodo,
    deleteTodo
}