import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/cupcake-logo.png';
import './NavBar.css';
import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';


class NavBar extends Component {

    componentDidMount() {

        this.props.getUser()
    }
    render() {

        return (
            <div className='nav-header' >
                <header className="App-header">
                    <div className='app-name'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Emma's Life</h1>
                    </div>
                    <div className='login'>
                        <a className='login-content' href={this.props.user.userid ? process.env.REACT_APP_LOGOUT : process.env.REACT_APP_LOGIN}>
                            <button className='Login-button'>{this.props.user.userid ? 'logout' : 'login'}</button></a>
                    </div>
                </header>
                <div className='Nav' >
                    <div className='Nav-Bar' >
                        <Link className='Links' to='/' >
                            <p>Home</p>
                        </Link>
                        <Link className='Links' to='/profile'>
                            <p>Profile</p>
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
                        <a className='wix' href='https://elmitch101.wixsite.com/emmaslife'>
                            <p>Live Wix Site</p>
                        </a>
                    </div>
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

export default connect(mapStateToProps, { getUser })(NavBar);