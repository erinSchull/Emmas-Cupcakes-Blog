import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, addOrder } from './../../ducks/reducer';

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
            total: null,
            localTotal: null
        };
        this.handleCakeInput = this.handleCakeInput.bind(this);
        this.handleFillingInput = this.handleFillingInput.bind(this);
        this.handleFrostingInput = this.handleFrostingInput.bind(this);
        this.handleToppingInput = this.handleToppingInput.bind(this);
        this.handleQuantityInput = this.handleQuantityInput.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleQuantityTotal = this.handleQuantityTotal.bind(this);
        this.showFullTotal = this.showFullTotal.bind(this);
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
    async handleQuantityTotal(e) {
        await this.handleQuantityInput(e);
        this.updateTotal();
        this.showFullTotal();
    }
    updateTotal() {
        var calcTotal = (this.state.quantity * 8000);
        this.setState({
            total: calcTotal
        })

    }
    showFullTotal() {
        var fixedTotal = this.state.total / 100
        this.setState({
            localTotal: fixedTotal
        })
    }
    handleClick() {
        let body = {
            cake: this.state.cake,
            filling: this.state.filling,
            frosting: this.state.frosting,
            topping: this.state.topping,
            quantity: this.state.quantity,
            total: this.state.total,
            status: 'Submitted'
        }
        // this.props.addOrder(body, this.props.user.userid);
        console.log('props user, is it user.userid or user.id?', this.props.user);
    }


    render() {
        console.log('state', this.state);
        return (
            <div id='order-form' >
                <h2 className='form-title' >So You Want Some Cupcakes?</h2>
                <h3 className='select-title' >Select Premade Cupcakes</h3>
                <p className='reminder' >Need a reminder?</p>
                <a href='/shop'><h5 className='shop-link'>Visit the shop!</h5></a>
                <select className='cupcake-drop'>
                    <option>Select One</option>
                    <option value="Smores" onChange={this.handleCakeInput} >Smores</option>
                    <option value="Winter Formal" onChange={this.handleCakeInput} >Winter Formal</option>
                    <option value="Deathly Hallows" onChange={this.handleCakeInput} >Deathly Hallows</option>
                    <option value="Lemon Cake" onChange={this.handleCakeInput} >Lemon Cake</option>
                    <option value="Turtle Cake" onChange={this.handleCakeInput} >Turtle Cake</option>
                </select>
                <h3 className='custom-title' >... Or Customize Your Cupcakes!</h3>
                <div className='custom-cakes' >
                    <div className='cakes' >
                        <h4 className='custom-stuff'>Cake Flavors</h4>
                        <p><input type='radio' name='custom' value="Chocolate" onClick={this.handleCakeInput} />Chocolate</p>
                        <p><input type='radio' name='custom' value="Vanilla" onClick={this.handleCakeInput} />Vanilla</p>
                        <p><input type='radio' name='custom' value="Pumpkin" onClick={this.handleCakeInput} />Pumpkin</p>
                        <p><input type='radio' name='custom' value="Strawberry" onClick={this.handleCakeInput} />Strawberry</p>
                        <p><input type='radio' name='custom' value="Red Velvet" onClick={this.handleCakeInput} />Red Velvet</p>
                    </div>

                    <div className='fillings' >
                        <h4 className='custom-stuff'>Filling Flavors</h4>
                        <ol>
                            <li className='liquid-title' >Liquid</li>
                            <p><input type='radio' name='filling' value="Marshmallow" onClick={this.handleFillingInput} />Marshmallow</p>
                            <p><input type='radio' name='filling' value="Nutella" onClick={this.handleFillingInput} />Nutella</p>
                            <p><input type='radio' name='filling' value="Raspberry Marshmallow" onClick={this.handleFillingInput} />Raspberry Marshmallow</p>
                            <p><input type='radio' name='filling' value="Lemon Curd" onClick={this.handleFillingInput} />Lemon Curd</p>
                            <p><input type='radio' name='filling' value="Creme Cheese" onClick={this.handleFillingInput} />Creme Cheese</p>

                            <li className='solid-title' >Solid</li>
                            <p><input type='radio' name='filling' value="M&M's" onClick={this.handleFillingInput} />M&M's</p>
                            <p><input type='radio' name='filling' value="Marshmallows" onClick={this.handleFillingInput} /> Marshmallows</p>
                            <p><input type='radio' name='filling' value="Cookie Dough" onClick={this.handleFillingInput} /> Cookie Dough</p>
                        </ol>
                    </div>

                    <div className='frostings' >
                        <h4 className='custom-stuff'>Frosting Flavors</h4>
                        <p><input type='radio' name='frosting' value="Creme Cheese" onClick={this.handleFrostingInput} />Creme Cheese</p>
                        <p><input type='radio' name='frosting' value="Butter Cream" onClick={this.handleFrostingInput} />Butter Cream</p>
                        <p><input type='radio' name='frosting' value="Chocolate Creme Cheese" onClick={this.handleFrostingInput} />Chocolate Creme Cheese</p>
                        <p><input type='radio' name='frosting' value="Brown Sugar" onClick={this.handleFrostingInput} />Brown Sugar</p>
                        <p><input type='radio' name='frosting' value="Chocolate Ganache" onClick={this.handleFrostingInput} />Chocolate Ganache</p>
                    </div>
                    <div className='toppings'>
                        <h4 className='custom-stuff'>Toppings</h4>
                        <p><input type='radio' name='topping' value="Theme Rings" onClick={this.handleToppingInput} />Theme Rings</p>
                        <p><input type='radio' name='topping' value="Graham Crackers" onClick={this.handleToppingInput} />Graham Crackers</p>
                        <p><input type='radio' name='topping' value="Sprinkles" onClick={this.handleToppingInput} />Sprinkles</p>
                        <p><input type='radio' name='topping' value="Fondant theme decor" onClick={this.handleToppingInput} />Fondant theme decor</p>
                        <p><input type='radio' name='topping' value="Powdered sugar design" onClick={this.handleToppingInput} />Powdered sugar design</p>
                    </div>
                    <div>
                        <h4 className='custom-stuff'>How Many do You Want?</h4>
                        <select name="quantity" onChange={this.handleQuantityTotal} >
                            <option></option>
                            <option name="nums" value="6" >6</option>
                            <option name="nums" value="12">12</option>
                            <option name="nums" value="18">18</option>
                            <option name="nums" value="24">24</option>
                        </select>
                    </div>
                </div>
                <div className='checkout'>

                    <section className='total' >

                        <h4 className='damage' >Your Total:</h4>
                        <p>${this.state.localTotal}.00</p>
                    </section>
                    <div className='stripe-checkout' >
                        <StripeCheckout
                            onClick={this.handleClick}
                            token={this.onToken}
                            stripeKey={stripe.pub_key}
                            amount={this.state.total}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from orderForm", state)
    console.log("user from orderForm", state.user)
    return {
        user: state.user,
        order: state.orders
    }
}

export default connect(mapStateToProps, { getUser, addOrder })(OrderForm);