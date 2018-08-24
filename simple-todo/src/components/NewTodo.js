import React from "react";

const NewTodo = props => {
  return (
    <div className="todo-control">
      <form>
        <input type="text" name="newTodo" placeholder="Enter todo.." />
      </form>
      <form>
        <button className="btn-submit">Create Todo</button>
      </form>
      <form>
        <input type="text" name="filter" placeholder="Filter todos.." />
      </form>
    </div>
  );
};

export default NewTodo;
