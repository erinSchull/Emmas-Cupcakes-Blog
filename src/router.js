import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Order from './components/Order/Order';
import BlogPreviews from './components/BlogPreviews/BlogPreviews';
import BlogPosts from './components/BlogPosts/BlogPosts';
import Shop from './components/Shop/Shop';
import About from './components/About/About.js';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';


export default(
    <div>
    <Switch>
        <Route component={NavBar} />
    </Switch>
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Order} path='/shop/orderform'/>
        <Route component={BlogPreviews} path='/previews'/>
        <Route component={BlogPosts} path='/previews/:id' /> 
        <Route component={Shop} path='/shop'/>
        <Route component={About} path='/about'/>
        <Route component={Profile} path='/profile'/>
    </Switch>
    </div>
)
