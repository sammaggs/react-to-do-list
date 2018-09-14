import React from "react";

const CompleteButton = ({ onClick, id, completed }) => {

  const buttonStyle = {
    backgroundColor : completed ? "green" : "red"
  }

  return <button 
            className="btn-primary"
            style={buttonStyle}
            onClick={ () => onClick(id)}
            > Complete
          </button>;
};

export default CompleteButton;
