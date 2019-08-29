import { combineReducers } from 'redux';
import appReducer from './reducer';
//combine all reducers
const allReducers = combineReducers({
    app: appReducer
});

export default allReducers;
