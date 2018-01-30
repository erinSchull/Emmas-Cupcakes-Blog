import React, { Component } from 'react';
import './main.css';
import router from './router';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {router}
      </div>
    );
  }
}

export default App;