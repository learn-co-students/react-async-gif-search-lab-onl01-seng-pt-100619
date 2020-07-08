import React, {Component} from 'react';

export default class GifList extends Component{

    state = {
        gifs: []
    }

    renderGifList(){
        return this.props.gifs.map((gif, id)=>{
            return <li><img src={gif} id={id} alt="funny gif"/></li>
            // console.log(gif)
        })
    }

    render(){
        return (
            <ul>{this.renderGifList()}</ul>
        )
    }
}