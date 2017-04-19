import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { observer, inject } from 'mobx-react'
import Devtools from 'mobx-react-devtools'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Devtools />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.todoStore.getFirstName}</h2>
          <button onClick={() => this.props.todoStore.changeName('Realvolve')}>Change Store</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default inject(['todoStore'])(observer(App));
