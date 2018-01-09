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
        const orders  = this.props.orders;
        const users = this.props.user;
        console.log('am I getting the proper userid?', this.props.user);
        return (
            <div>
                <div className='profile-title'>
                    <h2>It's All About You Here</h2>
                </div>

                <div className='auth-info' >
                    <p className='first-name'>First Name: {users.userid ? users.first_name : 'please'}</p>
                    <p className='last-name'>Last Name: {users.userid ? users.last_name : 'log'} </p>
                    <p className='email'> Email: {users.userid ? users.email : 'in'}</p>
                </div>

                <div className='Order-info'>
                    <div className='columns'>
                        <p className='tabs' >Order Number</p>
                        {users.userid ?
                            <div>{ this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.orderid}</div>
                            }) : 'Please place an order!'
                        }
                            </div> : 'Order'
                        }
                        {/* all admin rendering is crap. do this in own component */}
                        {/*{users.is_admin ? 
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.orderid}</div>
                            })}
                            </div> : null
                        }*/}
                    </div>

                    <div className='columns'>
                        <p className='tabs' >Cake Flavor</p>
                        {users.userid ?
                            <div>{ this.props.orders ?orders.map((item, i) => {
                                return <div key={i}>{item.cake}</div>
                            }) : null }
                            </div> : 'information'
                        }
                        {/*{users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.cake}</div>
                            })}
                            </div> : null
                        }*/}

                    </div>

                    <div className='columns'>
                        <p className='tabs'>Frosting Flavor</p>
                        {users.userid ?
                            <div>{ this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.frosting}</div>
                            }) : null }
                            </div> : 'will'
                        }
                        {/*{users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.frosting}</div>
                            })}
                            </div> : null
                        }*/}

                    </div>
                    <div className='columns'>
                        <p className='tabs'>Filling Flavor</p>
                        {users.userid ?
                            <div>{ this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.filling}</div>
                            }) : null }
                            </div> : 'show'
                        }
                       {/* {users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.filling}</div>
                            })}
                            </div> : null
                        }*/}
                    </div>


                    <div className='columns'>
                        <p className='tabs'>Topping</p>
                        {users.userid ?
                            <div>{ this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.topping}</div>
                            }) : null }
                            </div> : 'after'
                        }
                        {/*{users.is_admin ?
                            <div>{ this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.topping}</div>
                            }) : null}
                            </div> : null
                        }*/}
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Quantity</p>
                        {users.userid ?
                            <div>{ this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.quantity}</div>
                            }) : null }
                            </div> : 'you'
                        }
                        {/*{users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.quantity}</div>
                            })}
                            </div> : null
                        }*/}
                    </div>
                    <div className='columns'>
                        <p className='tabs'>Status</p>
                        {users.userid ?
                            <div>{ this.props.orders ? orders.map((item, i) => {
                                return <div key={i}>{item.status}</div>
                            }) : null }
                            </div> : 'log'
                        }
                        {/* {users.is_admin ?
                            <div>
                                <select>
                                    <option onClick={updateStatus} >Submitted</option>
                                    <option onClick={updateStatus}>Recieved</option>
                                    <option onClick={updateStatus}>Baking</option>
                                    <option onClick={updateStatus}>Final Touches</option>
                                    <option onClick={updateStatus}>Out For Delivery</option>
                                </select>
                            </div> :
                            null} */}
                    </div>
                    <div className='columns' >
                        <p className='tabs'>Total</p>
                        {users.userid ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.quantity}</div>
                            })}
                            </div> : 'in'
                        }
                        {/*{users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.quantity}</div>
                            })}
                            </div> : null
                        }*/}
                    </div>
                   {/* <div className='columns' >
                        <p className='tabs'>Delete Orders</p>
                    
                        {users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>
                                <button onClick={this.props.deleteOrder(orderid)}>Delete This Order</button>
                                </div>
                            })}
                            </div> : null
                        }
                    </div>*/}
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

export default connect(mapStateToProps, { getUser, userOrder})(Profile);