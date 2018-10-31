import React, {Component} from "react";
import Search from './Search';

export default class SearchComponent extends Component {
    render(){
        return(
            <div>
                <h2>hello, this the search compy</h2>
                <Search query={this.props.query} inputHandler={this.props.inputHandler} handleQuery={this.props.handleQuery}/>
            </div>
        )
    }
}