import axios from './Axios';
import { setTasks } from './StateActions';

export const getTasks = () => dispatch => {
    axios.get("/tasks").then(({ data }) => {
    const tasks = data;
    dispatch(setTasks(tasks));
    })
};

