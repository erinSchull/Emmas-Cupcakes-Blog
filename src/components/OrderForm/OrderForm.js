import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, addOrder } from './../../ducks/reducer';
import './OrderForm.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './../../stripeKey';
import axios from 'axios';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            order: {}
        };

    }
    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:3535/api/payment', { token, amount: 100 }).then(response => {
            alert('we are in business')
        });
    }

    componentDidMount() {
       // this.props.getUser()
        this.props.addOrder()
    }
    componentWillReceiveProps() {
        this.props.addOrder()
    }



    render() {
        return (
            <div>
                <h2>So You Want Some Cupcakes?</h2>
                <h3>Select Premade Cupcakes</h3>
                <p>Need a reminder?</p>
                <a href='/#/shop'><h5>Visit the shop!</h5></a>
                <select  className='cupcake-drop'>
                    <option onClick={addOrder.cake} >Smores</option>
                    <option onClick={addOrder.cake} >Winter Formal</option>
                    <option onClick={addOrder.cake} >Deathly Hallows</option>
                    <option onClick={addOrder.cake} >Lemon Cake</option>
                </select>
                <h3>... Or Customize Your Cupcakes!</h3>
                <div className='custom-cakes' >
                    <div className='cakes' >
                        <h4>Cake Flavors</h4>
                        <p><input type='radio' name='custom' onClick={addOrder.cake}/>Chocolate</p>
                        <p><input type='radio' name='custom' onClick={addOrder.cake}/>Vanilla</p>
                        <p><input type='radio' name='custom' onClick={addOrder.cake}/>Pumpkin</p>
                        <p><input type='radio' name='custom' onClick={addOrder.cake}/>Strawberry</p>
                        <p><input type='radio' name='custom' onClick={addOrder.cake}/>Red Velvet</p>
                    </div>

                    <div className='fillings' >
                        <h4>Filling Flavors</h4>
                        <ol>
                            <li>Liquid</li>
                            <p><input type='radio' name='liquid' onClick={addOrder.filling}/>Marshmallow</p>
                            <p><input type='radio' name='liquid' onClick={addOrder.filling}/>Nutella</p>
                            <p><input type='radio' name='liquid' onClick={addOrder.filling}/>Raspberry Marshmallow</p>
                            <p><input type='radio' name='liquid' onClick={addOrder.filling}/>Lemon Curd</p>
                            <p><input type='radio' name='liquid' onClick={addOrder.filling}/>Creme Cheese</p>

                            <li>Solid</li>
                            <p><input type='radio' name='solid' onClick={addOrder.filling}/>M&M's</p>
                            <p><input type='radio' name='solid' onClick={addOrder.filling}/> Marshmallows</p>
                            <p><input type='radio' name='solid' onClick={addOrder.filling}/> Cookie Dough</p>
                        </ol>
                    </div>

                    <div classname='frostings' >
                        <h4>Frosting Flavors</h4>
                        <p><input type='radio' name='frosting' onClick={addOrder.frosting}/>Creme Cheese</p>
                        <p><input type='radio' name='frosting' onClick={addOrder.frosting}/>Butter Cream</p>
                        <p><input type='radio' name='frosting' onClick={addOrder.frosting}/>Chocolate Creme Cheese</p>
                        <p><input type='radio' name='frosting' onClick={addOrder.frosting}/>Brown Sugar</p>
                        <p><input type='radio' name='frosting' onClick={addOrder.frosting}/>Chocolate Ganache</p>
                    </div>
                    <div className='toppings'>
                        <h4>Toppings</h4>
                        <p><input type='radio' name='topping' onClick={addOrder.topping} />Theme Rings</p>
                        <p><input type='radio' name='topping' onClick={addOrder.topping}/>Graham Crackers</p>
                        <p><input type='radio' name='topping' onClick={addOrder.topping}/>Sprinkles</p>
                        <p><input type='radio' name='topping' onClick={addOrder.topping}/>Fondant theme decor</p>
                        <p><input type='radio' name='topping' onClick={addOrder.topping}/>Powdered sugar design</p>
                    </div>
                    <div>
                        <h4>How Many do You Want?</h4>
                        <select onClick={addOrder.quantity} > 
                            <option>6</option>
                            <option>12</option>
                            <option>18</option>
                            <option>24</option>
                        </select>
                    </div>
                </div>
                <div className='stripe-checkout'>

                    <StripeCheckout
                        onClick={addOrder.total}
                        token={this.onToken}
                        stripeKey={stripe.pub_key}
                        amount={40000}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from private", state)
    return {
        user: state.user,
        order: state.orders
    }
}

export default connect(mapStateToProps, { getUser, addOrder })(OrderForm);