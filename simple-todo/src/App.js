import React, { Component } from "react";

import styled from "react-emotion";
import NewTodo from "./components/NewTodo";
import RenderList from "./components/NewTodo";

const TodoContainer = styled("main")`
  min-width: 600px;
  border: 1px solid #000;
  background: #845def;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 3em auto 0 auto;
`;
const Header = styled("div")`
  border-bottom: 1px solid black;
  text-align: center;
  background: #eb755a;
  padding-top: 1em;
`;

class App extends Component {
  state = {
    todos: [
      {
        title: "Learn Redux",
        id: generateId()
      },
      {
        title: "Work on Website",
        id: generateId()
      },
      {
        title: "Check on Coco",
        id: generateId()
      },
      {
        title: "Explore Google Fonts",
        id: generateId()
      },
      {
        title: "Tweet Coding Progress",
        id: generateId()
      },
      {
        title: "Review Algorithms",
        id: generateId()
      },
      {
        title: "Get a coffee!",
        id: generateId()
      },
      {
        title: "Make Dinner",
        id: generateId()
      }
    ],
    todoTitle: "",
    search: ""
  };
  handleNewTodoTitle = event => {
    const val = event.target.value;
    this.setState(() => ({
      todoTitle: val
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    this.addTodo(this.state.todoTitle);
  };
  addTodo = searchTerm => {
    const newState = {};
    newState.id = generateId();
    newState.title = searchTerm;
    this.setState(prevState => ({
      todos: [...prevState.todos, newState],
      todoTitle: ""
    }));
  };

  handleFilterChange = event => {
    const val = event.target.value.trim().toLowerCase();
    if (val.length > 0) {
      this.setState(() => ({
        search: val,
        todos: this.state.todos.filter((todo, indx) => {
          return todo.title
            .trim()
            .toLowerCase()
            .match(val);
        })
      }));
    }
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="container">
          <TodoContainer>
            <Header>
              <h1>React Todo App</h1>
            </Header>
            <div className="todo-control">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="newTodo"
                  placeholder="Enter todo.."
                  onChange={this.handleNewTodoTitle}
                  value={this.state.todoTitle}
                />
              </form>
              <form onSubmit={this.handleSubmit}>
                <button className="btn-submit">Create Todo</button>
              </form>
              <form>
                <input
                  type="text"
                  name="filter"
                  placeholder="Filter todos.."
                  onChange={this.handleFilterChange}
                />
              </form>
            </div>
            <ul>
              {todos.map((element, index) => {
                return <RenderList index={index} title={element.title} />;
              })}
            </ul>
          </TodoContainer>
        </div>
      </div>
    );
  }
}
export function generateId() {
  return Number((Math.random() * 55).toFixed(4));
}
export default App;
