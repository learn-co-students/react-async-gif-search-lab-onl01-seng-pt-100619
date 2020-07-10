import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        this.fetchGifs("ocean", 1)
        
    }

    fetchGifs = (query, limit = 3) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Kr8KJB9sIVpUOt2ckfDH72SXl7UAXrEY&rating=g&limit=${limit}`)
        .then(res => res.json())
        .then((json) => {
            this.setState({ 
                gifs: json.data.map(gif => ({
                        id: gif.id,
                        url: gif.images.original.url,
                        title: gif.title
                    }))
                })
            })
    }

    render() {
        return <div className="container">
                    <GifSearch className="" fetchGifs={this.fetchGifs}/>
                    <GifList imgData={this.state.gifs}/>
                </div>
    }

}

export default GifListContainer