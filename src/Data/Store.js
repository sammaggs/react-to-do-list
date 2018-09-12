import { createStore, applyMiddleware, compose } from "redux";
import initial from '../Initial';
import thunk from "redux-thunk";
import reducer from './Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;