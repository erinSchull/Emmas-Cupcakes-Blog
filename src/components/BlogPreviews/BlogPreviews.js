import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogPreviews extends Component {
    render() {
        return (
            <div>
                <h3>Blog Previews</h3>
                <Link to='/previews/1' >
                    <p>Post #1</p>
                </Link>
                <Link to='/previews/2' >
                    <p>Post #2</p>
                </Link>
                <Link to='/previews/3' >
                    <p>Post #3</p>
                </Link>
            </div>
        )
    }
}

export default BlogPreviews;