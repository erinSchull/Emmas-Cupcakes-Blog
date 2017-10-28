import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogPreviews extends Component {
    render() {
        return (
            <div>
                <h3>Blog Previews</h3>
                <Link to='/blog1' >
                    <p>Hello World!</p>
                </Link>
                <Link to='/blog2' >
                    <p>Books vs. Movies</p>
                </Link>
                <Link to='/blog3' >
                    <p>Killer Cupcakes</p>
                </Link>
            </div>
        )
    }
}

export default BlogPreviews;