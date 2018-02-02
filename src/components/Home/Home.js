import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>
                <div className='home-Div'>
                    <div className='home-content' >
                        <h3 className='home-title' >DISCOVER EMMA'S LIFE</h3>
                        <br />
                        <p className="Home-intro">
                            Come On In! (I don't bite) < br />
                            <span>
                            Check out my Blog, <br />
                            See the cupcakes I've made, < br />
                            And order some for yourself! </span>
                    </p>
                        <br />
                        <Link to='/previews' >
                            <button className='entry-button' >Enter Here</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;