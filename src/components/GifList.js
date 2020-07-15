import React, {Component} from 'react'
class GifList extends Component {
    getGifImage = () => {
        return this.props.gifs.map(gif => {
            return (<li><img src={gif.images.original.url} key={gif.id} alt="Testing" /></li>)
        })
    }
    render(){
        return(
                <ul>
                   {this.getGifImage()}
                </ul>
        )
    }   
}

export default GifList