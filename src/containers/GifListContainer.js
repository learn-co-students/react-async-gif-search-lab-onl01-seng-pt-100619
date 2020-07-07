import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    searchHandler = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=vY2rOCmcBy3GuoqPG4F3vHC3GgXHypk2&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            const images = [json.data[0].images.original.url, json.data[1].images.original.url, json.data[2].images.original.url]
            this.setState({images: images})
        })
    }

    render() {
        return (
            <div>
                <GifSearch handleSearch = {this.searchHandler} />
                <GifList data = {this.state} />
            </div>
        )
    }
}