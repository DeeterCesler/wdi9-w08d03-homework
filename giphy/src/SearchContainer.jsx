import React, {Component} from "react";
import Search from './Search';
import Results from "./Results";

export default class SearchComponent extends Component {
    constructor(){
        super();
        this.state = {
            submittedSearch: false
        }
    }
    render(){
        return(
            <div>
                <h2>hello, this the search compy</h2>
                {this.props.submittedSearch ? <Results query={this.props.query} /> :<Search query={this.props.query} inputHandler={this.props.inputHandler} handleQuery={this.props.handleQuery}/>}
            </div>
        )
    }
}