import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAdmin, readOrders, deleteOrder, updateStatus } from './../../ducks/reducer';

class AdminProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            orders: [{
                status: ''
            }]
        }
        this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus(event) {
        this.setState({
            orders: [{
                status: e.target.value
            }]
        })
    }
    componentDidMount() {
        this.props.getAdmin();
        this.props.readOrders();
    }
    render() {
        const admin = this.props.user;
        const orders = this.props.orders;
        return (
            <div>
                <div>
                    <h3>Welcome Back, Admin {admin.first_name}</h3>
                </div>
                <div className='Order-info'>
                    <div>
                        <p>Order Number</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.cake}</div>
                        })}
                        </div>
                    </div>
                    <div>
                        <p>Cake Flavor</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.cake}</div>
                        })}
                        </div>
                    </div>
                    <div>
                        <p>Frosting Flavor</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.frosting}</div>
                        })}
                        </div>
                    </div>
                    <div>
                        <p>Filing Flavor</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.filling}</div>
                        })}
                        </div>
                    </div>
                    <div>
                        <p>Topping</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.topping}</div>
                        })}
                        </div>
                    </div>
                    <div>
                        <p>Quantity</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.quantity}</div>
                        })}
                        </div>
                    </div>
                    <div>
                        <p>Status</p>
                        <div>
                            <select>
                                <option value={this.state.status} onClick={updateStatus} >Submitted</option>
                                <option value={this.state.status} onClick={updateStatus}>Recieved</option>
                                <option value={this.state.status} onClick={updateStatus}>Baking</option>
                                <option value={this.state.status} onClick={updateStatus}>Final Touches</option>
                                <option value={this.state.status} onClick={updateStatus}>Out For Delivery</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p>Total</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.total}</div>
                        })}
                        </div>
                    </div>
                    <div>
                        <p>Delete Order</p>
                        <div>{orders.map((item, i) => {
                            return <div key={i}>{item.total}</div>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('variable state from adminProfile', state)
    return {
        user: state.user,
        orders: state.orders
    }
}

export default connect(mapStateToProps, { getAdmin, readOrders, deleteOrder })(AdminProfile);