import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends Component{
    state = {
        gifs: []
    }


    componentDidMount(search){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response=> response.json())
            .then(json => {
                let gifs = []
                // console.log(json)
                for(let i = 0; i< 3; i++){
                    gifs.push(json.data[i].images.original.url)
                }
                this.setState({
                    gifs: gifs
                })
            console.log(this.state.gifs)
            })
    }

    searchGifs = (event, search) => {
        event.preventDefault()
        this.componentDidMount(search)
        // console.log(event)
        // console.log(search)
    }

    render(){
        return( 
            <div>
                <GifSearch searchGifs={this.searchGifs}/>
                <GifList gifs={this.state.gifs} />
             </div>
        )
    }
}