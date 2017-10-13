import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/cute cupcakes.jpeg';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Emma's Life</h1>
                    <a href={ process.env.REACT_APP_LOGIN }><button className='Login-button' >Login</button></a>
                </header>
                <div className='Nav-Bar'>
                    <Link className='Links' to='/' >
                        <p>Home</p>
                    </Link>

                    <Link className='Links' to='/previews' >
                        <p>Blog</p>
                    </Link>

                    <Link className='Links' to='/about'>
                        <p>About</p>
                    </Link>

                    <Link className='Links' to='/shop' >
                        <p>Shop</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;