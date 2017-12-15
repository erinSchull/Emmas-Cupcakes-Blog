import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAdmin, readOrders, deleteOrder, updateStatus} from './../../ducks/reducer';

class AdminProfile extends Component{
    constructor(props){
        super(props);

        this.state ={
            userInfo: [],
            orders: [{
                status: ''
            }]
        }
    }

    componentDidMount(){
        this.props.getAdmin();
        this.props.readOrders();
    }
    render(){
        const admin = this.props.user;
        return(
            <h3>Welcome Back, Admin {admin.first_name}</h3>
        )
    }
}

function mapStateToProps(state){
    console.log('variable state from adminProfile', state)
    return {
        user: state.userInfo,
        orders: state.orders
    }
}

export default connect(mapStateToProps, {getAdmin, readOrders, deleteOrder})(AdminProfile);