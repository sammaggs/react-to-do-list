import React from 'react';
import Form from './Form';

const AddTask = ({ onSubmit }) => (
    <React.Fragment>
        <h2>Add Task</h2>
        <Form onSubmit={ onSubmit } />
    </React.Fragment>
);

export default AddTask;