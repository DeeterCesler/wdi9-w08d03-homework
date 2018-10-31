import React, { Component } from 'react';
import './App.css';
import HelloWorld from "./HelloWorld";
import Search from './Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      query: ""
    }
  }
  inputHandler = (e) => {
    this.setState({
      query: e.currentTarget.value
    })
  }
  handleQuery = (e) => {
    e.preventDefault();
    console.log(this.state.query, "QUERIED");
  }
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Search query={this.state.query} inputHandler={this.inputHandler} handleQuery={this.handleQuery}/>
      </div>
    );
  }
}

export default App;
