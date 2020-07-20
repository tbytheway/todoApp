import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import TodoItem from './TodoItem'

import './index.css';


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      todos: []
    }

  }

renderTodos = () => {
  return this.state.todos.map(todo => {
    return (
      <TodoItem key={TodoItem.id} todo={todo}/>
    )
  })
}

componentDidMount() {
  axios
    .get('https://btw-flask-todo-api.herokuapp.com/todos')
    .then(res => this.setState({
      todos: res.data
    }))
    .catch(err => console.err())
}

render() {
  return(
    <div className="app">
      <h1>Todo App</h1>
      <div />
        {this.renderTodos()}
    </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
