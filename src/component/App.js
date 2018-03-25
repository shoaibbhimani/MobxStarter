import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import logo from '../logo.svg';
import mobxlogo from "../mobx.png"
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={mobxlogo} className="App-logo" alt="logo" />
          <h2>{this.props.todoStore.getFirstName}</h2>
          <button onClick={() => this.props.todoStore.changeName('ReactJS')}>Change Store</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default inject('todoStore')(observer(App));
