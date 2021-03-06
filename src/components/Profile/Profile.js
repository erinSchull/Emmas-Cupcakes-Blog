import React, { Component } from 'react';

import { connect } from 'react-redux';
// import AdminProfile from './../AdminProfile/AdminProfile';

import { getUser, userOrder } from './../../ducks/reducer';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            orders: []
        }
    }


    componentDidMount() {
        this.props.getUser();
        this.props.userOrder(this.props.user.userid);
    }

    render() {
        const orders = this.props.orders;
        const users = this.props.user;
        console.log('am I getting the proper userid?', this.props.user);
        return (
            <div className='profile' >
                <div className='profile-title'>
                    <h2>It's All About You Here</h2>
                </div>

                <div className='auth-info' >
                    <p className='first-name'>First Name: {users.userid ? users.first_name : 'please'}</p>
                    <p className='last-name'>Last Name: {users.userid ? users.last_name : 'log'} </p>
                    <p className='email'> Email: {users.userid ? users.email : 'in'}</p>
                </div>

                <span >Order Information</span>
                <div className='Order-info'>
                    <div className='columns'>
                        <p className='tabs' >Order Number</p>
                        {users.userid ?
                            <div>{orders ? orders.map((item, i) => {
                                return <div key={i}>{item.orderid}</div>
                            }) : 'Please place an order!'
                            }
                            </div> : 'Order'
                        }
                    </div>

                    <div className='columns'>
                        <p className='tabs' >Cake Flavor</p>
                        {users.userid ?
                            <div>{this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.cake}</div>
                            }) : null}
                            </div> : 'information'
                        }
                    </div>

                    <div className='columns'>
                        <p className='tabs'>Frosting Flavor</p>
                        {users.userid ?
                            <div>{this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.frosting}</div>
                            }) : null}
                            </div> : 'will'
                        }
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Filling Flavor</p>
                        {users.userid ?
                            <div>{this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.filling}</div>
                            }) : null}
                            </div> : 'show'
                        }
                    </div>


                    <div className='columns'>
                        <p className='tabs'>Topping</p>
                        {users.userid ?
                            <div>{this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.topping}</div>
                            }) : null}
                            </div> : 'after'
                        }
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Quantity</p>
                        {users.userid ?
                            <div>{this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.quantity}</div>
                            }) : null}
                            </div> : 'log in'
                        }
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Status</p>
                        {users.userid ?
                            <div>{this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.status}</div>
                            }) : null}
                            </div> : 'and'
                        }
                    </div>
                    <div className='columns' >
                        <p className='tabs'>Total</p>
                        {users.userid ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>${item.total}</div>
                            })}
                            </div> : 'order'
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from profile", state)
    return {
        user: state.user,
        orders: state.orders
    }
}

export default connect(mapStateToProps, { getUser, userOrder })(Profile);