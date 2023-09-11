import React from "react";

export default function Item({ todo, status }) {
  if (status) {
    return (
      <div className="container">
        <p>
          {" "}
          {todo} <span> : completed</span>{" "}
        </p>
      </div>
    );
  } 
  else {
    return (
      <div className="container">
        <p>
          {todo}
          <span> : pending</span>
        </p>
      </div>
    );
  }
}
