import React, { Component } from "react"

export default class GifList extends Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div class="list">
                <ul>
                    {this.props.gifs.map(gif => (<li><gif src={`${gif.url}`} alt=
                    "did not render properly"></gif></li>))}
                </ul>
            </div>
        )
    }

}