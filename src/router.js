import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Order from './components/OrderForm/OrderForm';
import BlogPreviews from './components/BlogPreviews/BlogPreviews';
import BlogPost3 from './components/BlogPosts/BlogPost3/BlogPost3';
import BlogPost2 from './components/BlogPosts/BlogPost2/BlogPost2';
import BlogPosts from './components/BlogPosts/BlogPost/BlogPost';
import Shop from './components/Shop/Shop';
import About from './components/About/About.js';
import Profile from './components/Profile/Profile';


export default (
    <div>
        <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Order} path='/shop/orderform' />
            <Route component={BlogPreviews} path='/previews' />
            <Route component={BlogPosts} path='/blog1' />
            <Route component={BlogPost2} path='/blog2' />
            <Route component={BlogPost3} path='/blog3' />
            <Route component={Shop} path='/shop' />
            <Route component={About} path='/about' />
            <Route component={Profile} path='/profile' />
        </Switch>
    </div>
)
