import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './BlogPreviews.css'

class BlogPreviews extends Component {
    render() {
        return (
            <div className='blog-previews' >
                <h3>Blog Previews</h3>
                <Link to='/blog1' >
                    <h4>Hello World!</h4>
                </Link>
                <p>My First Blog Post</p>
                {/* <Link to='/blog2' >
                    <p>Books vs. Movies</p>
                </Link> */}
                <Link to='/blog3' >
                    <h4>Killer Cupcakes</h4>
                </Link>
                <p>Check this out if you want to make my cupcakes in your own home!</p>
            </div>
        )
    }
}

export default BlogPreviews;