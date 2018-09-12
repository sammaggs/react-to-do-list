import React, { Component } from 'react';


class TaskList extends Component {
    
    render() {

    const { tasks } = this.props;
    const taskInfo = Object.values(tasks);

        return (
            <React.Fragment>
                <ul>
                    {Object.values(taskInfo).map((item, i) => (
                        <li key={i}> {item.title}{item.notes} </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

export default TaskList;