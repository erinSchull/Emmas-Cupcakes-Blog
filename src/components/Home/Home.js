import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            subtitle: ''
        }
    }

    handleChange(prop, e){
        this.setState({[prop]: e.target.value})
    }

    render() {
        return (
            <div>
                <div className='home-Div'>
                    <h3>DISCOVER EMMA'S LIFE</h3>
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