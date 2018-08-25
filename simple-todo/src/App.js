import React, { Component } from "react";

import styled from "react-emotion";
import NewTodo from "./components/NewTodo";

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
    ]
  };
  addTodo = todo => {
    const newTodo = {};
    newTodo.title = todo;
    newTodo.id = generateId();
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="container">
          <TodoContainer>
            <Header>
              <h1>React Todo App</h1>
              <h3>Increase Your Productivity</h3>
            </Header>
            <NewTodo addTodo={this.addTodo} />
            <ul>
              {todos.map((todo, index) => {
                return (
                  <div className="list">
                    <span className="task">Task #{index + 1}</span>
                    <li>{todo.title}</li>
                    <span className="delete">X</span>
                  </div>
                );
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
