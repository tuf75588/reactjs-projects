import React from "react";

const RenderList = props => {
  return (
    <div className="list">
      <span className="task">Task #{props.index + 1}</span>
      <li>{props.title}</li>
      <span className="delete">X</span>
    </div>
  );
};

export default RenderList;
