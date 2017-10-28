//need sass for styling- just leave this for now!//

import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import {getUser, getAdmin} from './../../ducks/reducer';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }
    
    componentDidMount(){
        this.props.getUser();
    }

    render() {

        const users = this.props.user;
        return (
            <div>
                <div className='profile-title'>DB calls</div>

                <div className='auth-info' >
                    <p className='first-name'>First Name: {users.userid ? users.first_name : 'please log in'}</p>
                    <p className='last-name'>Last Name: {users.userid ? users.last_name : null} </p>
                    <p className='email'> Email: {users.userid ? users.email : null}</p>
                </div>

                <div className='Order-info'>
                    <div className='columns'>
                        <p className='tabs' >Order Number</p>
                        <ul> DB OrderID</ul>
                        <ul> DB OrderID</ul>
                        <ul> DB OrderID</ul>
                    </div>
                    <div className='columns'>
                        <p className='tabs' >Cake Flavor</p>
                        <ul>DB orders.cake</ul>
                        <ul>DB orders.cake</ul>
                        <ul>DB orders.cake</ul>
                    </div>

                    <div className='columns'>
                        <p className='tabs'>Frosting Flavor</p>
                        <ul>DB orders.frosting</ul>
                        <ul>DB orders.frosting</ul>
                        <ul>DB orders.frosting</ul>
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Filling Flavor</p>
                        <ul>DB orders.filling</ul>
                        <ul>DB orders.filling</ul>
                        <ul>DB orders.filling</ul>
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Quantity</p>
                        <ul>DB orders.quantity</ul>
                        <ul>DB orders.quantity</ul>
                        <ul>DB orders.quantity</ul>
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Status</p>
                        <ul>DB orders.status</ul>
                        <ul>DB orders.status</ul>
                        <ul>DB orders.status</ul>
                    </div>
                    <div className='columns' >
                        <p className='tabs'>Total</p>
                        <ul>DB orders.total</ul>
                        <ul>DB orders.total</ul>
                        <ul>DB orders.total</ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from private", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser })(Profile);