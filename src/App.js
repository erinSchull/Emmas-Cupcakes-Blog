import React, { Component } from 'react';
import './main.css';
import router from './router';
import NavBar from './components/NavBar/NavBar';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const headerOrNah=this.props.location.pathname!=='/'?<NavBar/>:null;
    return (
      <div className="App">
        {headerOrNah}
        {router}
      </div>
    );
  }
}

export default withRouter(App);