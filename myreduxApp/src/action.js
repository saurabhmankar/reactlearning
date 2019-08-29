/*
     Actions 
*/
import axios from 'axios';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function actionCreator(actionType, data) {
    return {
        type: actionType,
        payload: data,
    };
}

function createRequestActionTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((requestTypes, type) => {
        requestTypes[type] = `${base}_${type}`;
        return requestTypes;
    }, {});
}

export const loginActionTypes = {
    post_login: createRequestActionTypes('POST_LOGIN'),
    pre_login: createRequestActionTypes('PRE_LOGIN')
};

let mydata = [
    {
        name: 'User 1',
        country: 'India'
    }, {
        name: 'User 2',
        country: 'US'
    }
]

export function getData() {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                dispatch(actionCreator(loginActionTypes.post_login.SUCCESS, { list: res.data }));
            })
    };
}

export function getData1() {

    // dispatch() is the method used to dispatch actions and trigger state changes to the store.

    return (dispatch) => {
        dispatch(actionCreator(loginActionTypes.pre_login.SUCCESS, { prelist: mydata }));
    };
}












