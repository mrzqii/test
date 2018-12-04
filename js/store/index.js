import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const initialState = {
}
export default createStoreWithMiddleware(rootReducer, initialState);