import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div>
                <div className='home-Div'>
                    <h3 className='home-title' >DISCOVER EMMA'S LIFE</h3>
                    <p className="Home-intro">
                        Come On In! (I don't bite)
                    </p>
                    <Link to = '/previews' >
                    <button className='entry-button' >Enter Here</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Home;