import React, { Component } from 'react';
import axios from 'axios';
import './Profile.css';
import { connect } from 'react-redux';

class Profile extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className='profile-title'>DB calls</div>

                <div className='auth-info' >
                    <p className='first-name'>First Name: DB first_name</p>
                    <p className='last-name'>Last Name: DB last_name</p>
                    <p className='email'> Email: DB email</p>
                </div>

                <div className='Order-info'>
                    <div className='order'>
                        <p className='order-tab' >Order Number</p>
                        <ul> DB OrderID</ul>
                        <ul> DB OrderID</ul>
                        <ul> DB OrderID</ul>
                    </div>
                    <div className='cake'>
                        <p>Cake Flavor</p>
                    </div>
                    <div className='frosting'>Frosting Flavor</div>
                    <div className='filling'>Filling Flavor</div>
                    <div className='filling'>Quantity</div>
                    <div className='status'>Status</div>
                </div>
            </div>
        )
    }
}

export default Profile