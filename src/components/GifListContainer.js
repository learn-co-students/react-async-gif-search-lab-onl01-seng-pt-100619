import React, {Component} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
class GifListContainer extends Component {
    state = {
        gifs: []
    }
    getGifs = (query = "cats") =>{
        let endpoint = 'https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=Fq3nw0ZyGCyEztoU0LIBSzcH0gNYqlad'
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                gifs: [data.data[0], data.data[1], data.data[2]]
            })
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.setState({gifs: []})
        let query = event.target.children[0].value
        
        return this.getGifs(query)
    }
    render(){
        return(<div>
            <GifSearch handleSubmit={this.submitHandler}/>
            <GifList gifs={this.state.gifs} />
        </div>)
    }
}

export default GifListContainer