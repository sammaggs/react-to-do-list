import React from "react";

const DeleteButton = ({ onClick, id }) => {

  return <button 
            onClick={ () => onClick(id)}
            > Delete
          </button>;
};

export default DeleteButton;
