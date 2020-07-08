import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }
    

    fetchGifs = value => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=e0AvkN0goRu200cWCCOSRaAHS1x5I3Y6&q=${value}&limit=3&offset=0&rating=G&lang=en`)
        .then(res => res.json())
        .then( response => {
            this.setState({ gifs: response["data"].map(gif => ({ url: gif["images"]["fixed_height"]["url"] }))})
        })
    }

    render() {
        return (
            <div>
                < GifSearch searchHandler={this.fetchGifs} />
                < GifList  gifs={this.state.gifs} />
            </div>
        )
    }

}

export default GifListContainer 