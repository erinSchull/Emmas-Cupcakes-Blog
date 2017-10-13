import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='home-Div'>
                    <h3>DISCOVER EMMA'S LIFE</h3>
                    <p className="App-intro">
                        Come On In! (I don't bite)
                </p>
                    <button className='entry-button' >Enter Here</button>
                </div>
            </div>
        )
    }
}
export default Home;