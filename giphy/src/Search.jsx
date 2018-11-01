import React, {Component} from "react";

export default class Search extends Component{
    render(){
        return(
            <form onSubmit={this.props.handleQuery}>
                <input type="text" name="query" placeholder="Search..." onChange={this.props.inputHandler} value={this.props.query}/>
                <input type="submit"/>
            </form>
        )
    }
}