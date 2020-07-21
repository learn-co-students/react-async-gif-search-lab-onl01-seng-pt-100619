import React, { Component } from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleTyping = this.handleTyping.bind(this)
        this.state = {
            searchValue: "",
            gifs: []
        }
    }

    handleTyping = (e) => {
        this.setState({...this.state, searchValue: e.target.value})
    }

    handleClick = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchValue}&api_key=81qfLuj2SLUWyXc33QDbsgukbJNb9cMr&rating=g`)
            .then(response => response.json())
            .then(data => {
                this.setState({...this.state, gifs: data.data})
                console.log(data.data)}
            )
    }

    render() {
        return (
            <div class="container">
                < GifSearch handleClick={this.handleClick} handleTyping={this.handleTyping} searchValue={this.state.searchValue}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

}