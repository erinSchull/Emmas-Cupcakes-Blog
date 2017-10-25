//need sass for styling- just leave this for now!//

import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';
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

                    <div className='frosting'>
                        <p>Frosting Flavor</p>
                    </div>
                    <div className='filling'>
                        <p>Filling Flavor</p>
                    </div>
                    <div className='filling'>
                        <p>Quantity</p>
                    </div>
                    <div className='status'>
                        <p>Status</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;