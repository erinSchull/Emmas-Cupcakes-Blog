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
                    <h5>Life is life.</h5>
                    <p>I don't know how I would say that better. I just needed a place to explode my life so I give you: Emma's Life. <br />
                        Yes, my name is Emma. That isn't just some random name. I enjoy reading, writing, music, and TV. I enjoy baking and I might even start a "bake shop" sometime in the future, for those who live close enough to me... This just got awkward... <br />
                        Well, I'm Emma... and welcome to Emma's Life
                        </p>
                </div>
                <p>Icons made by <a className='freepik-link' href="http://www.freepik.com" title="Freepik">Freepik </a>
                    from <a className='flaticon-link' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com </a>
                    is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
            </div>

        )
    }
}

export default About;