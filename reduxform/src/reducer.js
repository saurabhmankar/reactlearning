/*
     Reducers 
*/

import { loginActionTypes } from './action';

const initialState = {
    list: [],
    prelist:[]
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case loginActionTypes.post_login.SUCCESS:
            return {
                ...state,
                list: payload.list,
            };
            case loginActionTypes.pre_login.SUCCESS:
            return {
                ...state,
                prelist: payload.prelist,
            };
        default:
            return state;
    }
};
