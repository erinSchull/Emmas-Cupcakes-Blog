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
        return(
            <h3>This will have all the same shtuff as the current profile</h3>
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