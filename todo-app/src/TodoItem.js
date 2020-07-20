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
        console.log("checked")
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

        <button>X</button>
        </div>
    )
    }
}
export default TodoItem