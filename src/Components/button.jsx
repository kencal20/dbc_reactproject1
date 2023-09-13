import React from "react";

let Button = ({ handleClick, children }) => {
  return (
    <div className="button">
      <button onClick={(e) => {e.stopPropagation(); 
        console.log(e);
        handleClick();}}>
        {children}
        </button>
    </div>
  );
};

export default Button;
