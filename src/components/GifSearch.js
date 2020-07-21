import React, { Component } from "react"

export default class GifSearch extends Component {

    constructor(props) {
        super(props)
    }

    


    render() {
        return (
            <div class="search bar">
                <input value={this.props.searchValue} onChange={this.props.handleTyping} ></input>
                <button class="submit" onClick={this.props.handleClick}>Search</button>
            </div>
        )
    }

}