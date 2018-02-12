import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, addOrder } from './../../ducks/reducer';
// import './OrderForm.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './../../stripeKey';
import axios from 'axios';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            cake: '',
            filling: '',
            frosting: '',
            topping: '',
            quantity: null,
            total: null
        };
        this.handleCakeInput = this.handleCakeInput.bind(this);
        this.handleFillingInput = this.handleFillingInput.bind(this);
        this.handleFrostingInput = this.handleFrostingInput.bind(this);
        this.handleToppingInput = this.handleToppingInput.bind(this);
        this.handleQuantityInput = this.handleQuantityInput.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:3535/api/payment', { token, amount: 100 }).then(response => {
            alert('we are in business')
        });
    }
    //update local state on each click, then make an onClick to use the redux function
    handleCakeInput(e) {
        this.setState({
            cake: e.target.value
        })
    }
    handleFrostingInput(e) {
        this.setState({
            frosting: e.target.value
        })
    }
    handleFillingInput(e) {
        this.setState({
            filling: e.target.value
        })
    }
    handleToppingInput(e) {
        this.setState({
            topping: e.target.value
        })
    }
    handleQuantityInput(e) {
        this.setState({
            quantity: e.target.value
        })
    }
    updateTotal() {
        var calcTotal = (this.state.quantity * 8000);
        if (this.state.total === 0){
        this.setState({
            total: calcTotal
        })
    } else {
        this.setState({
            total: 0
        })
        this.setState({
            total: calcTotal
        })
    }

    }
    handleClick() {
        let body = {
            cake: this.state.cake,
            filling: this.state.filling,
            frosting: this.state.frosting,
            topping: this.state.topping,
            quantity: this.state.quantity,
            total: this.state.total
        }
        // this.props.addOrder(body, this.props.user.userid);
        console.log('props user, is it user.userid or user.id?', this.props.user);
    }


    render() {
        return (
            <div className='order-form' >
                <h2>So You Want Some Cupcakes?</h2>
                <h3>Select Premade Cupcakes</h3>
                <p>Need a reminder?</p>
                <a href='/#/shop'><h5>Visit the shop!</h5></a>
                <select className='cupcake-drop'>
                    <option value={this.state.cake} onClick={this.handleCakeInput} >Smores</option>
                    <option value={this.state.cake} onClick={this.handleCakeInput} >Winter Formal</option>
                    <option value={this.state.cake} onClick={this.handleCakeInput} >Deathly Hallows</option>
                    <option value={this.state.cake} onClick={this.handleCakeInput} >Lemon Cake</option>
                </select>
                <h3>... Or Customize Your Cupcakes!</h3>
                <div className='custom-cakes' >
                    <div className='cakes' >
                        <h4>Cake Flavors</h4>
                        <p><input type='radio' name='custom' value={this.state.cake} onClick={this.handleCakeInput} />Chocolate</p>
                        <p><input type='radio' name='custom' value={this.state.cake} onClick={this.handleCakeInput} />Vanilla</p>
                        <p><input type='radio' name='custom' value={this.state.cake} onClick={this.handleCakeInput} />Pumpkin</p>
                        <p><input type='radio' name='custom' value={this.state.cake} onClick={this.handleCakeInput} />Strawberry</p>
                        <p><input type='radio' name='custom' value={this.state.cake} onClick={this.handleCakeInput} />Red Velvet</p>
                    </div>

                    <div className='fillings' >
                        <h4>Filling Flavors</h4>
                        <ol>
                            <li>Liquid</li>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} />Marshmallow</p>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} />Nutella</p>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} />Raspberry Marshmallow</p>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} />Lemon Curd</p>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} />Creme Cheese</p>

                            <li>Solid</li>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} />M&M's</p>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} /> Marshmallows</p>
                            <p><input type='radio' name='filling' value={this.state.filling} onClick={this.handleFillingInput} /> Cookie Dough</p>
                        </ol>
                    </div>

                    <div classname='frostings' >
                        {/* fix me next!! */}
                        <h4>Frosting Flavors</h4>
                        <p><input type='radio' name='frosting' value={this.state.frosting} onClick={this.handleFrostingInput} />Creme Cheese</p>
                        <p><input type='radio' name='frosting' value={this.state.frosting} onClick={this.handleFrostingInput} />Butter Cream</p>
                        <p><input type='radio' name='frosting' value={this.state.frosting} onClick={this.handleFrostingInput} />Chocolate Creme Cheese</p>
                        <p><input type='radio' name='frosting' value={this.state.frosting} onClick={this.handleFrostingInput} />Brown Sugar</p>
                        <p><input type='radio' name='frosting' value={this.state.frosting} onClick={this.handleFrostingInput} />Chocolate Ganache</p>
                    </div>
                    <div className='toppings'>
                        <h4>Toppings</h4>
                        <p><input type='radio' name='topping' value={this.state.topping} onClick={this.handleToppingInput} />Theme Rings</p>
                        <p><input type='radio' name='topping' value={this.state.topping} onClick={this.handleToppingInput} />Graham Crackers</p>
                        <p><input type='radio' name='topping' value={this.state.topping} onClick={this.handleToppingInput} />Sprinkles</p>
                        <p><input type='radio' name='topping' value={this.state.topping} onClick={this.handleToppingInput} />Fondant theme decor</p>
                        <p><input type='radio' name='topping' value={this.state.topping} onClick={this.handleToppingInput} />Powdered sugar design</p>
                    </div>
                    <div>
                        <h4>How Many do You Want?</h4>
                        <select name="quantity" onClick={this.handleQuantityInput} >
                            <option value="6" >6</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                            <option value="24">24</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={this.updateTotal}>Show me my damage!</button>
                    <p>{this.state.total}</p>
                </div>
                <div className='stripe-checkout'>

                    <StripeCheckout
                        onClick={this.handleClick}
                        token={this.onToken}
                        stripeKey={stripe.pub_key}
                        amount={this.state.total}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from orderForm", state)
    return {
        user: state.user,
        order: state.orders
    }
}

export default connect(mapStateToProps, { getUser, addOrder })(OrderForm);