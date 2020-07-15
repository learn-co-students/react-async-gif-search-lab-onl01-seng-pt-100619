import React, { Component } from 'react'

export default class GifList extends Component {
    
    
    render() {
        return (
            <div>
                <ul>
                    {this.props.results.map((image) => <li><img key={image.url} src={image.url} alt='gif'/></li>)}
                </ul>
            </div>
        )
    }
}
