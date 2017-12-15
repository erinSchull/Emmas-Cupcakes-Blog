import axios from 'axios';


let initialState ={
    user: [],
    orders: [{
        status: '',
        cake: '',
        filling: '',
        frosting: '',
        topping: '',
        quantity: null,
        total: null
    }],
    is_admin: false,
    blogs: [],
    cart: []
}


const GET_USER = 'GET_USER';
const GET_ORDER = 'GET_ORDER';
const ADMIN_ORDERS = 'ADMIN_ORDERS';
const ADD_ORDER = 'ADD_ORDER';
const GET_ADMIN = 'GET_ADMIN';
const GET_USER_ORDER = 'GET_USER_ORDER';
const ADD_TOTAL = 'ADD_TOTAL';
const DELETE_ORDER = 'DELETE_ORDER';
const UPDATE_STATUS = 'UPDATE_STATUS';

export function getUser() { //action builder//
    const user = axios.get('/auth/me')
    .then(res => {
        console.log(res.data)
        return res.data
    })
    console.log(user)
    return{
        type: GET_USER,
        payload: user
    }
};

export function getOrder(orderid) {
    const order = axios.get(`/api/order/${orderid}`)
    .then(res => {
        return res.data
    })
    return {
        type: GET_ORDER,
        payload: order
    }
};

export function readOrders() {
    const orders = axios.get('/api/orders')
    .then(res=> {
        return res.data
    })
    return {
        type: ADMIN_ORDERS,
        payload: orders
    }
};
export function getAdmin() {
    const admin = axios.get('/api/admin')
    .then(res => {
        return res.data
    })
    return {
        type: GET_ADMIN,
        payload: admin
    }
};

export function userOrder(usersid) {
    const userOrder = axios.get(`/api/order/${usersid}`)
    .then(res => {
        return res.data
    })
    return {
        type: GET_USER_ORDER,
        payload: userOrder
    }
};

export function addOrder(usersid, body) {
    const addOrder = axios.post(`/api/order/${usersid}`, body)
    .then(res => {
        return res.data
    })
    return {
        type: ADD_ORDER,
        payload: addOrder
    }
};
export function addTotal(orderid) {
    const addTotal = axios.post(`/api/order/${orderid}`)
    .then(res => {
        return res.data
    })
    return {
        type: ADD_TOTAL,
        payload: addTotal
    }
};
export function deleteOrder(orderid) {
    const deleteOrder = axios.delete(`/api/order/${orderid}`)
    .then(res => {
        return res.data
    })
    return {
        type: DELETE_ORDER,
        payload: deleteOrder
    }
};
export function updateStatus(orderid) {
    const updateStatus = axios.put(`/api/order/${orderid}`)
    .then(res => {
        return res.data
    })
    return {
        type: UPDATE_STATUS,
        payload: updateStatus
    }
}


export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_USER + '_FULFILLED': //fulfilled is required with axios payloads//
        return Object.assign({}, state, {user: action.payload});
        case GET_ORDER + '_FULFILLED':
        return Object.assign({}, state, {orders: action.payload});
        case ADMIN_ORDERS + '_FULFILLED':
        return Object.assign({}, state, {orders: action.payload});
        case GET_ADMIN + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload});
        case GET_BLOG + '_FULFILLED':
        return Object.assign({}, state, {blogs: action.payload});
        case GET_USER_ORDER + '_FULFILLED':
        return Object.assign({}, state, {orders: action.payload});
        case ADD_ORDER + '_FULFILLED':
        return Object.assign({}, state, {orders: action.payload});
        case DELETE_ORDER + '_FULFILLED':
        return Object.assign({}, state, {orders: action.payload});
        case ADD_TOTAL + '_FULFILLED':
        return Object.assign({}, state, {orders: action.payload});
        default:
        return state
    }
}