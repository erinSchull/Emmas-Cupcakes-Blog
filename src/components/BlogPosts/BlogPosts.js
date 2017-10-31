import React, { Component } from 'react';

import './BlogPosts.css';

class BlogPosts extends Component {

    render() {
        return (
            <div className='hello-blog' >
                <h2 className='blog1-title' >Hello World!</h2>
                <p className='blog1-body1' >Hey! So I'm Emma. So I decided I wanted to start a blog but I haven't quite decided on what to write about.
                    I'm probably going to just write whatever is on my mind whenever that is. Some days it might be a random thought or a recipe.
                    Just whatever it is don't expect my posts to come out at any particular time or date. But in any case this is my blog and to will
                    be just as random as I would like it to be.</p>
                <p className='blog1-body2'>So now I will talk about real stuff. This is my first post so... what actually goes in a blog post? I don't really know... I'll figure it out eventually.</p>
                <p className='blog1-body3'>But this is all I've got for now. Hopefully future posts will be better.</p>
                <p className='blog1-sig'>Bye!</p>
                <a href='/#/previews' >
                    <button>I wanna see more!</button>
                </a>
            </div>
        )
    }
}

export default BlogPosts;