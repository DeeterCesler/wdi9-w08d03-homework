import React, {Component} from "react";

export default class Results extends Component{
    render(){
        return(
            <div>
                <h3 onClick={this.props.giphySearch}>Results for <i>{this.props.query}</i>:</h3>
                    {console.log(this.props.queriedGifs)}
                    {this.props.queriedGifs.map((gif,i)=>{
                        return (
                            <div>
                                {}
                                <p>result {i+1}</p>
                                <iframe src={gif.embed_url}/>
                                <br/>
                            </div>
                        )
                    })}
            </div>
        )
    }
}