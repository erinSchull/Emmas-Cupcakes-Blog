import React, { Component } from 'react';
import './About.css';

class About extends Component {
    constructor() {
        super();

        this.state = {
            about: '',
            title: ''
        }
    }

    handleChange(prop, e) {
        this.setState({ [prop]: e.target.value })
    }



    render() {
        return (
            <div>
                <div>
                    <h1>About Emma's Life</h1>
                    <h4>The Story</h4>
                    <p className='about-Text'>
                        <div>Life is life.</div>

                        <div>I don't know how I would say that better. I just needed a place to explode my life so I give you: Emma's Life.
                        Yes, my name is Emma. That isn't just some random name. I enjoy reading, writing, music, and TV. I enjoy baking and I might even start a "bake shop" sometime in the future, for those who live close enough to me... This just got awkward...
                        Well, I'm Emma... and welcome to Emma's Life
                        </div>
                    </p>
                </div>
                <div>
                    <input type='text' placeholder='About Title'></input>
                    <input type='text' value={this.state.about} onClick={(e) => this.handleChange('about', e)}></input>
                </div>
            </div>
        )
    }
}

export default About;