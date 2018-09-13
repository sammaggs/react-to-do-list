import React, { Component } from 'react';
import CompleteButton from '../Containers/Button';
import DeleteButton from '../Containers/DeleteButtonContainer';
import AddTask from '../Containers/AddTask';

class TaskList extends Component {
    
    render() {

    const { tasks } = this.props;
    const taskInfo = Object.values(tasks);

        return (
            <React.Fragment>
                <AddTask taskData={tasks}/>
                <ul>
                    {Object.values(taskInfo).map((task, i) => (
                        <li id={task.id} key={i}> Title: {task.title} Notes: {task.notes} 
                            <CompleteButton id={task.id} completed={task.completed}/>
                            <DeleteButton id={task.id}/>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

export default TaskList;