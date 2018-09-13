const reducer = ( state, action ) => {
    switch (action.type) {
        case "onClickComplete" : return onClickComplete(state, action);
        case "onClickDelete" : return onClickDelete(state, action);
        case "onClickAddTask" : return onClickAddTask(state, action);
        default: return state;

    };
};

const onClickComplete = (state, {id}) => {
    let tasks = {...state.tasks}
    tasks[id].completed = true;
    return {
        ...state,
        tasks
    }
}

const onClickDelete = (state, {id}) => {
    const newState = {...state}
    const tasks = {...newState.tasks};
    delete tasks[id];
    return {
        newState,
        tasks
    };
}

const onClickAddTask = (state, action) => {
    const newState = {...state}
    const newTask = createTask(action);
    return {
        ...state,
        tasks: {
            ...state.tasks,
            [newTask.id]: newTask,
        },
    };
}

let lastID = 4;

const createTask = ({ title }) => {
    lastID += 1;
    return {
        id: lastID,
        title: title,  
    };
};

export default reducer;