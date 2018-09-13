import { connect } from 'react-redux';
import Button from '../Components/Button';
import { isCompleted } from '../Data/Actions';


const mapDispatchToProps = dispatch => {
    return{
        onClick: (id ) => dispatch(isCompleted(id))
    };
}


const enhancer = connect(null, mapDispatchToProps);
export default enhancer(Button);