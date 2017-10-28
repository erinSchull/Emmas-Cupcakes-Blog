import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUser} from './../../ducks/reducer';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
       this.props.getUser()
    }

    render() {
        return (
            <div>
                <h2>So You Want Some Cupcakes?</h2>
                <h3>Select Premade Cupcakes</h3>
                <p>Need a reminder?</p>
                <a href='/#/shop'><h5>Visit the shop!</h5></a>
                <select className='cupcake-drop'>
                    <option>Smores</option>
                    <option>Winter Formal</option>
                    <option>Deathly Hallows</option>
                    <option>Lemon Cake</option>
                </select>
                    <h3>... Or Customize Your Cupcakes!</h3>
                <div className='custom-cakes' >
                    <div className='cakes' >
                        <h4>Cake Flavors</h4>
                        <p><input type='radio' />Chocolate</p>
                        <p><input type='radio' />Vanilla</p>
                        <p><input type='radio' />Pumpkin</p>
                        <p><input type='radio' />Strawberry</p>
                        <p><input type='radio' />Red Velvet</p>
                    </div>

                    <div className='fillings' >
                        <h4>Filling Flavors</h4>
                        <ul>
                            <li>Liquid</li>
                            <p><input type='radio' name='liquid' />Marshmallow</p>
                            <p><input type='radio' name='liquid'/>Nutella</p>
                            <p><input type='radio' name='liquid' />Raspberry Marshmallow</p>
                            <p><input type='radio' name='liquid' />Lemon Curd</p>
                            <p><input type='radio' name='liquid' />Creme Cheese</p>

                            <li>Solid</li>
                            <p><input type='radio' />M&M's</p>
                            <p><input type='radio' /> Marshmallows</p>
                            <p><input type='radio' /> Cookie Dough</p>
                        </ul>
                    </div>

                    <div classname='frostings' >
                        <h4>Frosting Flavors</h4>
                        <p><input type='radio' />Creme Cheese</p>
                        <p><input type='radio' />Butter Cream</p>
                        <p><input type='radio' />Chocolate Creme Cheese</p>
                        <p><input type='radio' />Brown Sugar</p>
                        <p><input type='radio' />Chocolate Ganache</p>
                    </div>
                    <div className='toppings' >
                        <h4>Toppings</h4>
                        <p><input type='radio' />Theme Rings</p>
                        <p><input type='radio' />Graham Crackers</p>
                        <p><input type='radio' />Sprinkles</p>
                        <p><input type='radio' />Fondant theme decor</p>
                        <p><input type='radio' />Powdered sugar design</p>
                    </div>
                </div>
                <div className='stripe-checkout'>
                    <button>Let's Pay!</button>
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

export default connect(mapStateToProps, { getUser })(OrderForm);