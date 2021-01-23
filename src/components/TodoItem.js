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
                textDecoration: this.props.todo.completed ?
                'line-through' : 'none',
                //background: '#ffc107',
                //background: '#17a2b8',
                borderRadius: '5px',
                border: '2px solid #17a2b8',
                color: 'black',
                marginTop: '5px',
                marginBottom: '5px'
            }
        } 
        return {
            padding: '10px',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none',
            background: '#fefefe',
            opacity: 0.9,
            color: 'black',
            borderRadius: '5px',
            margin: '3px',
            border: '1px solid #cccccc'
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

    // if an item is completed, check it on page load
    getChecked = (id, markComplete) => {
        if (this.props.todo.completed === true) {
            return (
                <input type="checkbox" className="checkbox"
                    onChange={markComplete.bind(this, id)} checked/>
            )
        } else {
            return (
                <input type="checkbox" className="checkbox"
                onChange={markComplete.bind(this, id)} />
            )
        }
    }

    render() {

        // destructuring
        // getting props from Todos Component (up the ladder)
        const { id, title } = this.props.todo;
        let { chooseTodoItem, delTodo, selectID, markComplete } = this.props;
        // const taskState = 
        return (
            
            <div className="todoItem" style={this.getStyle(id,selectID)} onClick={chooseTodoItem.bind(this,id)}>      
                {/*<img className="symbol" src={this.assignSymbol("")} alt="symbol" />*/}

                <p className="checkboxContainer">
                    {this.getChecked(id, markComplete)}
                    {' '}
                </p>
                { title }
                <button className="delBtn" onClick={delTodo.bind(this,id)}> X </button>{' '}
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
