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


class App extends Component {
  state = {
    todos: [],
    selectID: null
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState( { todos: res.data })) 
  }

  // select ID
  selectID = (id) => {
    this.setState({
      selectID: id
    });
    console.log(id + ' selected');
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
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <ActionBar />

            
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <div id="todoItemsContainer">
                    <Todos todos={this.state.todos} markComplete={this.markComplete} 
                    delTodo={this.delTodo} />
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
