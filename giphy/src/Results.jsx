import React, {Component} from "react";

export default class Results extends Component{
    render(){
        return(
            <div>
                <h3 onClick={this.props.giphySearch}>Results for <i>{this.props.query}</i>:</h3>
            </div>
        )
    }
}