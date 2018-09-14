import { connect } from 'react-redux';
import TaskList from '../Components/TaskList';
import { getTasks } from '../Data/ApiActions';


const mapStateToProps = ( state ) => {
    return {
        tasks: state.tasks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getTasks()),
    };
};  


const enhancer = connect(mapStateToProps, mapDispatchToProps);
export default enhancer(TaskList);