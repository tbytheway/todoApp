import React, { Component } from 'react'
import axios from 'axios'


class TodoItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            done: props.todo.done
        }
    }
     toggleDone = () => {
         const { id } = this.props.todo
         const { done } = this.state

        axios
            .patch(`https://btw-flask-todo-api.herokuapp.com/todo/${id}`,
{
    done: !done
})
.then(
    this.setState({
        done: !done
    })
    )
    .catch(err => console.warn("toggleDone err", err))

    }


render() {
    return(
        <div className="todo-item">
        <input
            type="checkbox"
            onClick={this.toggleDone}
            defaultChecked={this.state.done}
        />
        <p className={this.state.done ? "done" : null}>{this.props.todo.title}</p>

        <button onClick={() => this.props.handleDelete(this.props.todo.id)} >X</button>
        </div>
    )
    }
}
export default TodoItem