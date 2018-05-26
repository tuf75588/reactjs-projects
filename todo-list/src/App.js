import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    message: `Hello Coding Garden`,
    newTodo: '',
  todos: [{
    title: 'Learn React',
    done: false
  },
    {
      title: 'Learn JSX',
      done: false,
    }],
  };
formSubmitted = (e) => {
  e.preventDefault()
  this.setState((prevState) => ({
    todos: [...this.state.todos, {
      title: this.state.newTodo,
      done: false
    }],
    newTodo: ''
  }))

}
inputChange = (e) => {
  const text = e.target.value;
  this.setState({ newTodo: text })
}
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <form action="" onSubmit={this.formSubmitted}>
          <label htmlFor="newTodo">Add Todo</label>
          <input type="text" id="newTodo" name="newTodo" onChange={this.inputChange} value={this.state.newTodo} />
          <button type="submit">Submit Todo</button>
        </form>
        <ul>{this.state.todos.map(todo => {
          return <li key={todo.title}>{todo.title}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
