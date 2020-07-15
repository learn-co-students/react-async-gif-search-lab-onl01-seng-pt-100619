import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    

    handleFetch = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
      
  }
    
    
    
    render() {
        return (
            <div>
                <GifList results={this.state.gifs}/>
                <GifSearch fetchGifs={this.handleFetch}/>
            </div>
        )
    }

    componentDidMount(){
        this.handleFetch()
    }
}
