import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person.jsx'

class Person_Data extends Component {
  constructor(){
    super()
    this.state={
      current:true
    }
  }
  handle=()=>{
    this.setState({current:false});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <button className="btn btn-primary" id="testBtn" onClick={this.handle}>Click to see testing</button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person/>
      </div>
    );
  }
}

export default Person_Data;
