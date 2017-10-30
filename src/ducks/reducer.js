import axios from 'axios';


let initialState ={
    user: [],
    orders: [],
    is_admin: false,
    blogs: []
}


const GET_USER = 'GET_USER';
const GET_ORDER = 'GET_ORDER';
const ALL_ORDERS = 'ALL_ORDERS';
const ADD_ORDER = 'ADD_ORDER';
const GET_ADMIN = 'GET_ADMIN';
const GET_BLOG = 'GET_BLOG';
const ADD_BLOG = 'ADD_BLOG';
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

export function getOrder() {
    const order = axios.get('/api/getorder')
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
        type: ALL_ORDERS,
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

export function getBlog(blogid) {
    const blog = axios.get(`/api/${blogid}`).then(res => {
        return res.data
    })
    return {
        type: GET_BLOG,
        payload: blog
    }
};

export function addBlog(blogid) {
    const blog = axios.post(`/api/${blogid}`)
    .then(res => {
        return res.data
    })
    return {
        type: ADD_BLOG,
        payload: blog
    }
};

export function userOrder(userid) {
    const userOrder = axios.get(`/api/order/${userid}`)
    .then(res => {
        return res.data
    })
    return {
        type: GET_USER_ORDER,
        payload: userOrder
    }
};

export function addOrder() {
    const addOrder = axios.post('/api/order')
    .then(res => {
        return res.data
    })
    return {
        type: ADD_ORDER,
        payload: addOrder
    }
};
export function addTotal(total) {
    const addTotal = axios.post(`/api/order/${total}`)
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
        case ALL_ORDERS + '_FULFILLED':
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