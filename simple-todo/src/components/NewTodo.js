import React, { Component } from "react";
import { generateId } from "../App";

class NewTodo extends Component {
  state = {
    todoTitle: ""
  };
  handleTitleChange = event => {
    const val = event.target.value;
    this.setState(() => ({
      todoTitle: val
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { todoTitle } = this.state;
    this.props.addTodo(todoTitle);
  };

  render() {
    return (
      <div className="todo-control">
        <form>
          <input
            type="text"
            name="newTodo"
            placeholder="Enter todo.."
            onChange={this.handleTitleChange}
          />
        </form>
        <form onSubmit={this.handleSubmit}>
          <button className="btn-submit">Create Todo</button>
        </form>
        <form>
          <input type="text" name="filter" placeholder="Filter todos.." />
        </form>
      </div>
    );
  }
}
export default NewTodo;
