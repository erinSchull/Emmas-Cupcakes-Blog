import axios from 'axios';



let initialState ={
    user:{},
    is_admin: false
}


const GET_USER = 'GET_USER';

export function getUser(id) {
    const user = axios.get(/auth/me)
    .then(res => {
        res.data
    })
    return{
        type: GET_USER,
        payload: user
    }
};

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload})

        default:
        return state
    }
}