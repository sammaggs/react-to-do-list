export const isCompleted = ( id ) => {
    return {
        type: "onClickComplete",
        id : id,
    };
};

export const isDeleted = ( id ) => {
    return {
        type: "onClickDelete",
        id : id,
    };
};

export const addTask = ( {title, id} ) => {
    return {
        type: "onClickAddTask",
        id : id,
        title : title,
    };
};

export const setTasks = tasks => {
    return {
        type: "setTasks",
        tasks: tasks,
        
    };
};