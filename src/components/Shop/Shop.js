import React, { Component } from 'react';
import './Shop.css';

import smores from './../../images/smores-cupcake.jpg';
import winterFormal from './../../images/winter-formal.jpg';
import deathlyHallows from './../../images/deathly-hollows-cupcake.jpeg';
import lemonCakes from './../../images/lemon-cupcakes.png';

    class Shop extends Component {
        render() {
            return (
                <div>
                    <h2 className='shop-intro' >Welcome to Emma's Cupcake Shop!</h2>
                    <h3 className='premade-title' >Cupcakes I've Made</h3>
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
                            <img src={lemonCakes} alt= 'lemon zest cupcakes' className='lemon-cake'/>
                            <h4>Lemon Cupcakes</h4>
                            <p>White cupcakes</p>
                            <p>Lemon curd filling</p>
                            <p>creme cheese frosting</p>
                            <p>Lemon zest to top</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Shop;