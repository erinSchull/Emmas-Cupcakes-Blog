import React, { Component } from 'react';
import './Shop.css';
import {getUser} from './../../ducks/reducer';
import {connect} from 'react-redux';

import smores from './../../images/smores-cupcake.jpg';
import winterFormal from './../../images/winter-formal.jpg';
import deathlyHallows from './../../images/deathly-hollows-cupcake.jpeg';
import lemonCakes from './../../images/lemon-cupcakes.png';

class Shop extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return (
            <div>
                <h1 className='shop-intro' >Welcome to Emma's Cupcake Shop!</h1>
                <h2 className='premade-title' >Cupcakes I've Made</h2>
                <div className='spec-cupcakes' >
                    <div>
                        <img src={smores} alt='smores cupcake' className='smores-img' />
                        <h4>Smores Cupcake</h4>
                        <p>Chocolate cake</p>
                        <p>Marshmallow filling</p>
                        <p>Creme cheese frosting</p>
                        <p>Topped with graham cracker</p>
                    </div>
                    <div>
                        <img src={winterFormal} alt='wintry cupcake' className='winter-formal' />
                        <h4>Winter Formal Cupcake</h4>
                        <p>Chocolate cupcake </p>
                        <p>Creme cheese frosting</p>
                        <p>Silver coloured sugar</p>
                    </div>
                    <div>
                        <img src={deathlyHallows} alt='deathly hallows cupcake' className='deathly-hallows' />
                        <h4>Deathly Hallows Cupcake</h4>
                        <p>Chocolate cupcake</p>
                        <p>Chocolate buttercream frosting</p>
                        <p>Gold painted fondant</p>
                    </div>
                    <div>
                        <img src={lemonCakes} alt='lemon zest cupcakes' className='lemon-cake' />
                        <h4>Lemon Cupcakes</h4>
                        <p>White cupcakes</p>
                        <p>Lemon curd filling</p>
                        <p>creme cheese frosting</p>
                        <p>Lemon zest to top</p>
                    </div>
                </div>
                    <h2>How you can customize your cupcake order</h2>
                <div className='custom-cakes' >
                    <div className='cakes'>
                    <h4>Cake Flavors</h4>
                    <ol>
                        <li>Chocolate</li>
                        <li>Vanilla</li>
                        <li>Pumpkin</li>
                        <li>Strawberry</li>
                        <li>Red Velvet</li>
                    </ol>
                    </div>
                    <div className='fillings'>
                        <h4>Filling Flavors</h4>
                        <ul>
                            <li>Liquid</li>
                            <ol>
                                <li>Marshmallow</li>
                                <li>Nutella</li>
                                <li>Raspberry Marshmallow</li>
                                <li>Lemon Curd</li>
                                <li>Creme Cheese</li>
                            </ol>

                            <li>Solid</li>

                            <ol>
                                <li>M&M's</li>
                                <li>Marshmallows</li>
                                <li>Cookie Dough</li>
                            </ol>
                        </ul>
                    </div>
                    <div className='frostings' >
                        <h4>Frosting Flavors</h4>
                        <ol>
                            <li>Creme Cheese</li>
                            <li>Butter Cream</li>
                            <li>Chocolate Creme Cheese</li>
                            <li>Brown Sugar</li>
                            <li>Chocolate Ganache</li>
                        </ol>
                    </div>
                    <div className='toppings'>
                        <h4>Toppings</h4>
                        <ol>
                            <li>Theme Rings</li>
                            <li>Graham Crackers</li>
                            <li>Sprinkles</li>
                            <li>Fondant theme decor</li>
                            <li>Powdered sugar design</li>
                        </ol>
                    </div>
                </div>
                <a className='button-text' href= {this.props.user.userid ? '/#/shop/orderform' : process.env.REACT_APP_LOGIN}>
                <button className='order-button' >Alright, I'm Ready to Order!</button> 
                {/* this works */}
                </a>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("state from shop", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{getUser})(Shop);