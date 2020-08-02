import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch' 

class GifListContainer extends Component {
    constructor(props){
        super(props) 
        this.state = {
            gifs: []
        }
    }

    handleSearch = (query) => {
        const url = "https://api.giphy.com/v1/gifs/search?q=query&api_key=dc6zaTOxFJmzC&rating=g"
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const imgData = data.data.map(i => ({url: i.images.original.url}))
            this.setState({
                gifs: imgData
            })
        })
    }
        
        render() {
            return(
                <div className="GifListContainer">
                    <GifSearch handleSearch={this.handleSearch}/>
                    <GifList gifs={this.state.gifs}/>
                </div>
            )
        }
}

export default GifListContainer 