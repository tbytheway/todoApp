import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

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
      <div key={todo.id}>
        {todo.title}
      </div>
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
    <div>
      <h1>Todo App</h1>
      <div />
        {this.renderTodos()}
    </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
