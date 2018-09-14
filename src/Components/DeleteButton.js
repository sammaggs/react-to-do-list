import React from "react";

const DeleteButton = ({ onClick, id }) => {

  return <button className="btn-secondary"
            onClick={ () => onClick(id)}
            > Delete
          </button>;
};

export default DeleteButton;
