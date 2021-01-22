import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import ActionBar from './components/layout/ActionBar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import {v4 as uuid} from "uuid";
import axios from 'axios';
import './App.css';

// mark a card class to render each weekday
class App extends Component {
  state = {
    todos: [],
    selectID: null,
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState( { todos: res.data })) 
  }

  // store ID of chosen todo item in state
  chooseTodoItem = (id) => {
    this.setState({
      selectID: id
    });
    console.log(id + ' selected');
    
    this.setState({todos: this.state.todos.map(todo => {
        if (todo.id === this.state.selectID) {
          // toggle todo.isSelected
          todo.isSelected = !todo.isSelected;
          console.log("Selected: " + todo.isSelected);
        }
        return todo;
      })
    });

    return id;
  };


  // toggle complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }
  
  // mark migrated
  markMigrated = (id) => {
    console.log("Item " + id + " migrated");
  }

  // mark scheduled
  markScheduled = (id) => {
    console.log("Item " + id + " scheduled");

    // add scheduled date to the todo item
  }

  // delete todo
  delTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter
        (todo => todo.id !== id)] }));
  }

  // add todo
  addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos:
        [...this.state.todos, res.data]} ));
  }

  render() {
    //console.log(this.state.todos);
    
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <ActionBar
              todos={this.state.todos}
              selectID={this.state.selectID}

              // button functions
              markComplete={this.markComplete}
              markMigrated={this.markMigrated}
              markScheduled={this.markScheduled}
              delTodo={this.delTodo}
            />
            
              <Route exact path="/" render={props => (
                <React.Fragment>         
                  <div id="todoItemsContainer">
                    <h3 style={{color: 'black'}}> Sunday </h3>
                    <AddTodo addTodo={this.addTodo} />
                    <div id="scrollContainer">
                      <Todos
                        chooseTodoItem={this.chooseTodoItem}
                        todos={this.state.todos}
                        selectID={this.state.selectID}
                        markComplete={this.markComplete} 
                      />
                    </div>
                  </div>
                </React.Fragment>
              )} />

              <Route path="/about" component={About}/>
           

          </div>
        </div> 
      </Router> 
    );
  }
}

export default App;
