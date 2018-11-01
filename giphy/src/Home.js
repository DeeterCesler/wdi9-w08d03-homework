import React, { Component } from 'react';
import './App.css';
import HelloWorld from "./HelloWorld";
import SearchContainer from './SearchContainer';
import Results from "./Results";

class App extends Component {
  constructor(){
    super();
    this.state = {
      query: "",
      submittedSearch: false
    }
  }
  inputHandler = (e) => {
    this.setState({
      query: e.currentTarget.value
    })
  }
  handleQuery = async (e) => {
    e.preventDefault();
    await this.setState({
      submittedSearch: true
    })
    console.log(this.state.submittedSearch);
    return;
  }
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <SearchContainer submittedSearch={this.state.submittedSearch} query={this.state.query} inputHandler={this.inputHandler} handleQuery={this.handleQuery}/>
      </div>
    );
  }
}

export default App;
