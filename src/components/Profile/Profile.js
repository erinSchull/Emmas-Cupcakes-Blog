//need sass for styling- just leave this for now!//

import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { getUser, getAdmin, userOrder, readOrders, updateStatus } from './../../ducks/reducer';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        this.props.getUser();
        this.props.userOrder(this.props.user.userid);
        this.props.getAdmin();
        this.props.readOrders();
    }

    render() {

        const { orders } = this.props;
        const users = this.props.user;
        console.log(this.props.user.userid)
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
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.orderid}</div>
                            })}
                            </div> : null
                        }
                        {users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.orderid}</div>
                            })}
                            </div> : null
                        }
                    </div>
                        
                    <div className='columns'>
                        <p className='tabs' >Cake Flavor</p>
                        {users.userid ? 
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.cake}</div>
                            })}
                            </div> : null
                        }
                        {users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.cake}</div>
                            })}
                            </div> : null
                        }

                    </div>

                    <div className='columns'>
                        <p className='tabs'>Frosting Flavor</p>
                        {users.userid ? 
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.frosting}</div>
                            })}
                            </div> : null
                        }
                        {users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.frosting}</div>
                            })}
                            </div> : null
                        }

                    </div>
                    <div className='columns'>
                        <p className='tabs'>Filling Flavor</p>
                        {users.userid ? 
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.filling}</div>
                            })}
                            </div> : null
                        }
                        {users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.filling}</div>
                            })}
                            </div> : null
                        }
                    </div>
                    

                    <div className='columns'>
                        <p className='tabs'>Topping</p>
                        {users.userid ? 
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.topping}</div>
                            })}
                            </div> : null
                        }
                        {users.is_admin ?
                            <div>{orders.map((item, i) => {
                                return <div key={i}>{item.topping}</div>
                            })}
                            </div> : null
                        }
                    </div>
                        <div className='columns'>
                            <p className='tabs'>Quantity</p>
                            {users.userid ? 
                                <div>{orders.map((item, i) => {
                                    return <div key={i}>{item.quantity}</div>
                                })}
                                </div> : null
                            }
                            {users.is_admin ?
                                <div>{orders.map((item, i) => {
                                    return <div key={i}>{item.quantity}</div>
                                })}
                                </div> : null
                            }
                        </div>
                        <div className='columns'>
                            <p className='tabs'>Status</p>
                            {users.userid ? 
                                <div>{orders.map((item, i) => {
                                    return <div key={i}>{item.status}</div>
                                })}
                                </div> : null
                            }
                            {users.is_admin ? 
                                <div>
                                    <select>
                                        <option onClick={updateStatus} >Submitted</option>
                                        <option onClick={updateStatus}>Recieved</option>
                                        <option onClick={updateStatus}>Baking</option>
                                        <option onClick={updateStatus}>Final Touches</option>
                                        <option onClick={updateStatus}>Out For Delivery</option>
                                    </select>
                                </div> :
                                null}
                        </div>
                        <div className='columns' >
                            <p className='tabs'>Total</p>
                            {users.userid ? 
                                <div>{orders.map((item, i) => {
                                    return <div key={i}>{item.quantity}</div>
                                })}
                                </div> : null
                            }
                            {users.is_admin ?
                                <div>{orders.map((item, i) => {
                                    return <div key={i}>{item.quantity}</div>
                                })}
                                </div> : null
                            }
                            </div>
                        </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
                    console.log("state from private", state)
    return {
        user: state.user,
        orders: state.orders
    }
}

export default connect(mapStateToProps, {getUser, getAdmin, userOrder, readOrders, updateStatus })(Profile);