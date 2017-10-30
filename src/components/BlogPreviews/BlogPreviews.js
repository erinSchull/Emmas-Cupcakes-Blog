import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogPreviews.css'

class BlogPreviews extends Component {
    render() {
        return (
            <div className='blog-previews' >
                <h3>Blog Previews</h3>
                <Link to='/blog1' >
                    <p>Hello World!</p>
                </Link>
                <p>My First Blog Post</p>
                {/* <Link to='/blog2' >
                    <p>Books vs. Movies</p>
                </Link> */}
                <Link to='/blog3' >
                    <p>Killer Cupcakes</p>
                </Link>
                <p>Check this out if you want to make my cupcakes in your own home!</p>
            </div>
        )
    }
}

export default BlogPreviews;