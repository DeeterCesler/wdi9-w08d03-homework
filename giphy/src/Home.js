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
      submittedSearch: false,
      queriedGifs: []
    }
  }
  inputHandler = (e) => {
    this.setState({
      query: e.currentTarget.value
    })
  }
  handleQuery = async (e) => {
    try{
      e.preventDefault();
      const foundGifs = await fetch("https://api.giphy.com/v1/gifs/search?api_key=d5HafejXzCKkO8J32vFEHUuLTIitzetc&q=" + this.state.query + "&limit=5");
      const parsedGifs = await foundGifs.json();
      console.log(parsedGifs);
      await this.setState({
        submittedSearch: true,
        queriedGifs: parsedGifs.data
      })
      console.log(this.state);
      return;
    }catch(err){
      console.log(err)
    }
  }
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <SearchContainer submittedSearch={this.state.submittedSearch} query={this.state.query} inputHandler={this.inputHandler} handleQuery={this.handleQuery} queriedGifs={this.state.queriedGifs}/>
      </div>
    );
  }
}

export default App;
