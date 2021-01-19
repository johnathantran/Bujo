import React, { Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            /*5 props */
            <TodoItem
                key={todo.id}
                todo={todo}
                selectID={this.props.selectID}
                chooseTodoItem={this.props.chooseTodoItem}
                markComplete={this.props.markComplete}
            />
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
}

export default Todos;
