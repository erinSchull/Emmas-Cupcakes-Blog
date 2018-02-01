import React, { Component } from 'react';

import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';

import smores from './../../images/smores-cupcake.jpg';
import winterFormal from './../../images/winter-formal.jpg';
import deathlyHallows from './../../images/deathly-hollows-cupcake.jpeg';
import lemonCakes from './../../images/lemon-cupcakes.png';
import turtleCake from './../../images/turtle-cupcake.jpg';

class Shop extends Component {
    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return (
            <div className='shop-titles'>
                <h1 className='shop-intro' >Welcome to Emma's Cupcake Shop!</h1>
                <br />
                <h2 className='premade-title' >Cupcakes I've Made</h2>
                <div className='spec-cupcakes' >
                    <list>
                        <img src={smores} alt='smores cupcake' className='smores-img' />
                        <h4 className='cake-title' >Smores Cupcake</h4>
                        <br />
                        <p className='cake-descript' >Chocolate cake</p>
                        <p className='cake-descript' >Marshmallow filling</p>
                        <p className='cake-descript' >Creme cheese frosting</p>
                        <p className='cake-descript' >Topped with graham cracker</p>
                    </list>
                    <list>
                        <img src={winterFormal} alt='wintry cupcake' className='winter-formal' />
                        <h4 className='cake-title' >Winter Formal Cupcake</h4>
                        <br />
                        <p className='cake-descript' >Chocolate cupcake </p>
                        <p className='cake-descript' >Creme cheese frosting</p>
                        <p className='cake-descript' >Silver coloured sugar</p>
                    </list>
                    <list>
                        <img src={deathlyHallows} alt='deathly hallows cupcake' className='deathly-hallows' />
                        <h4 className='cake-title' >Deathly Hallows Cupcake</h4>
                        <br />
                        <p className='cake-descript' >Chocolate cupcake</p>
                        <p className='cake-descript' >Chocolate buttercream frosting</p>
                        <p className='cake-descript' >Gold painted fondant</p>
                    </list>
                    <list>
                        <img src={lemonCakes} alt='lemon zest cupcakes' className='lemon-cake' />
                        <h4 className='cake-title' >Lemon Cupcakes</h4>
                        <br />
                        <p className='cake-descript' >White cupcakes</p>
                        <p className='cake-descript' >Lemon curd filling</p>
                        <p className='cake-descript' >creme cheese frosting</p>
                        <p className='cake-descript' >Lemon zest to top</p>
                    </list>
                    <list>
                        <img src={turtleCake} alt='turtle cupcake' className='turtle-cake' />
                        <h4 className='cake-title' >Turtle Cupcake</h4>
                        <br />
                        <p className='cake-descript' >Chocolate cupcakes</p>
                        <p className='cake-descript' >Pecan Caramel  filling</p>
                        <p className='cake-descript' >vanilla vuttercream frosting</p>
                        <p className='cake-descript' >Chocolate and Caramel Drizzle to top</p>
                    </list>
                </div>
                <h2 className='custom-title' >How you can customize your cupcake order</h2>
                <br />
                <div className='custom-cakes' >
                    <div className='cakes'>
                        <h4>Cake Flavors</h4>
                        <br />
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
                        <br />
                        <ul>
                            <li className='liquid'>Liquid</li>
                            <ol>
                                <li>Marshmallow</li>
                                <li>Nutella</li>
                                <li>Raspberry Marshmallow</li>
                                <li>Lemon Curd</li>
                                <li>Creme Cheese</li>
                            </ol>
                            <br />
                            <li className='solid'>Solid</li>
                            <ol>
                                <li>M&M's</li>
                                <li>Marshmallows</li>
                                <li>Cookie Dough</li>
                            </ol>
                        </ul>
                    </div>
                    <div className='frostings' >
                        <h4>Frosting Flavors</h4>
                        <br />
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
                        <br />
                        <ol>
                            <li>Theme Rings</li>
                            <li>Graham Crackers</li>
                            <li>Sprinkles</li>
                            <li>Fondant theme decor</li>
                            <li>Powdered sugar design</li>
                        </ol>
                    </div>
                </div>
                <a className='button-text' href={this.props.user.userid ? '/#/shop/orderform' : process.env.REACT_APP_LOGIN}>
                    <button className='order-button' >{this.props.user.userid ? `Alright, I'm Ready to Order!` : 'Please Log in Before Ordering'}</button>
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

export default connect(mapStateToProps, { getUser })(Shop);