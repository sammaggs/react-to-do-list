import React from 'react';
import Form from './Form';

const AddTask = ({ onSubmit }) => (
    <React.Fragment>
        <h2>Add Task</h2>
        <div className="input-group-append">
        <Form onSubmit={ onSubmit } />
        </div>
    </React.Fragment>
);

export default AddTask;