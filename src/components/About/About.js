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
                    <div className='about-Text'>
                        <p>Life is life.</p>
                        <p>I don't know how I would say that better. I just needed a place to explode my life so I give you: Emma's Life.
                        Yes, my name is Emma. That isn't just some random name. I enjoy reading, writing, music, and TV. I enjoy baking and I might even start a "bake shop" sometime in the future, for those who live close enough to me... This just got awkward...
                        Well, I'm Emma... and welcome to Emma's Life
                        </p>
                    </div>
                    <p>Icons made by <a className='freepik-link' href="http://www.freepik.com" title="Freepik">Freepik </a>
                        from <a className='flaticon-link' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com </a>
                        is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
                </div>
            </div>
        )
    }
}

export default About;