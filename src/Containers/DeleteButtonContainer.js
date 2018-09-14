import { connect } from 'react-redux';
import DeleteButton from '../Components/DeleteButton';
import { isDeleted } from '../Data/StateActions';


const mapDispatchToProps = dispatch => {
    return{
        onClick: ( id ) => dispatch(isDeleted(id))
    };
}

const enhancer = connect(null, mapDispatchToProps);
export default enhancer(DeleteButton);