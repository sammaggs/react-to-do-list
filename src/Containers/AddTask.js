import { connect } from 'react-redux';
import AddTask from '../Components/AddTask';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: ({title}) => dispatch({
            type: "onClickAddTask",
            title : title,
        })
    };
};

export default connect(null, mapDispatchToProps)(AddTask);