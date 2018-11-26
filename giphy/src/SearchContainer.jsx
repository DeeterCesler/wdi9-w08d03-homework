import React, {Component} from "react";
import Search from './Search';
import Results from "./Results";

export default class SearchComponent extends Component {
    render(){
        return(
            <div>
                <h2>input the term you want and get gifs back</h2>
                {this.props.submittedSearch ? <Results query={this.props.query} queriedGifs={this.props.queriedGifs} /> :<Search query={this.props.query} inputHandler={this.props.inputHandler} handleQuery={this.props.handleQuery}/>}
            </div>
        )
    }
}