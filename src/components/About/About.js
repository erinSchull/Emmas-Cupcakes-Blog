import React, { Component } from 'react';


class About extends Component {

    render() {
        return (

            <div className='about-page' >
                <h1>About Emma's Life</h1>
                <h4>The Story</h4>
                <div className='about-Text'>
                    <br />
                    <p className='disclaimer' >Disclaimer: The following text is from the <a className='about-wix' href='https://elmitch101.wixsite.com/emmaslife' >Live Wix Site</a> with more blog posts. This site is just a practice site, the shop is not a real shop. </p>
                    <br />
                    <h5 className='life-text' >Life is life.</h5>
                    <p className='about-body' >I don't know how I would say that better. I just needed a place to explode my life so I give you: Emma's Life. <br />
                        Yes, my name is Emma. That isn't just some random name. I enjoy reading, writing, music, and TV. I enjoy baking and I might even start a "bake shop" <br /> sometime in the future, for those who live close enough to me... This just got awkward... <br />
                        <span>Well, I'm Emma... and welcome to Emma's Life</span>
                        </p>
                </div>
            </div>

        )
    }
}

export default About;