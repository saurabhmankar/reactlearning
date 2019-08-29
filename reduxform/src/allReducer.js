import { combineReducers } from 'redux';
import appReducer from './reducer';
import { reducer as formReducer } from 'redux-form'

//combine all reducers
const allReducers = combineReducers({
    form: formReducer,
    
    app: appReducer
});

export default allReducers;
