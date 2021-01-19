import React, { Component } from 'react'
import PropTypes from 'prop-types';

// import symbols
import bulletSymbol from '../images/bulletSymbol.png';
import completedSymbol from '../images/completedSymbol.png';
import migrateSymbol from '../images/migrateSymbol.png';
import scheduleSymbol from '../images/scheduleSymbol.png';

export class TodoItem extends Component {

    state = {
        selected: false,
        // default: incomplete
        // can be: complete, migrated, or scheduled
        taskSymbol: null
    }

    getStyle = (id,selectID) => {
        if (id === selectID){
            return {
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ?
                'line-through' : 'none',
                background: 'red'
            }
        } 
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none',
            background: '#f4f4f4'
        }
    }

    chooseTodo = (id) => {

        // toggle CSS styling if chosen
        if (this.state.selected === false) {
            console.log("no");
        }
    }

    toggleStyle = () => {
        this.style.background = 'white';
    }

    // assign symbol according to task state (complete, migrated, scheduled)
    assignSymbol = (taskState) => {
        console.log(taskState);
        let symbol;
        if (taskState === "completed"){
            symbol = completedSymbol;
        }
        else if (taskState === "migrated"){
            symbol = migrateSymbol;
        } else if (taskState === "scheduled"){
            symbol = scheduleSymbol;
        } else {
            symbol = bulletSymbol;
        }
        return (symbol);
    }

    render() {

        // destructuring
        // getting props from Todos Component (up the ladder)
        const { id, title } = this.props.todo;
        let { chooseTodoItem, selectID, markComplete } = this.props;
        // const taskState = 
        return (
            
            <div className="todoItem" style={this.getStyle(id,selectID)} onClick={chooseTodoItem.bind(this,id)}>      
                <img className="symbol" src={this.assignSymbol("")} alt="symbol" />
                {title}
                {/*
                <p>
                    <input type="checkbox"
                    onChange={markComplete.bind(this, id)} />
                    {' '}
                    { title }
                </p>
                */}
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
}

export default TodoItem
