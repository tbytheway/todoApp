import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import TodoItem from './TodoItem'

import './index.css';


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      todo: '',
      todos: []
    }

  }

handleChange = e => {
  this.setState({
    todo: e.target.value
  })
}

deleteTodo = id => {
  axios 
    .delete(`https://btw-flask-todo-api.herokuapp.com/todo/${id}`)
    .then(
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id !== id
        })
      })
    )
    .catch(err => console.warn("deleteTodo error:"))
}


addTodo = e => {
  e.preventDefault()
  console.log(this.state.todo)

  axios
    .post('https://btw-flask-todo-api.herokuapp.com/todo', {
      title: this.state.todo,
      done: false
    })
    .then(res => {
      this.setState({
        todos: [...this.state.todos, res.data],
        todo: ""
      })

    })
    .catch(err => console.warn("add todo"))
}




renderTodos = () => {
  return this.state.todos.map(todo => {
    return (
      <TodoItem key={TodoItem.id} todo={todo} handleDelete={this.deleteTodo}/>
    )
  })
}

componentDidMount() {
  axios
    .get('https://btw-flask-todo-api.herokuapp.com/todos')
    .then(res => this.setState({
      todos: res.data
    }))
    .catch(err => console.error(err))
}

render() {
  return(
    <div className="app">
      <h1>Todo App</h1>
      <form className="add-todo" onSubmit={this.addTodo}>
      <input
            type="text"
            placeholder="Add Todo"
            onChange={this.handleChange}
            value={this.state.todo}
            
        />
        <button type="submit">Add</button>
      </form>
      <div />
        {this.renderTodos()}
    </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
