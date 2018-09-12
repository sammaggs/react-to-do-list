import { connect } from 'react-redux';
import TaskList from '../Components/TaskList';


const mapStateToProps = ( state ) => {
    return {
        tasks: state.tasks
    }
};


const enhancer = connect(mapStateToProps);
export default enhancer(TaskList);