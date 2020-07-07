import React from 'react'

export default class GifList extends React.Component {

    render() {
        return (
        <ul>
            <li>
                <img src={this.props.data.images[0]} alt="" />
            </li>
            <li>
                <img src={this.props.data.images[1]} alt="" />
            </li>
            <li>
                <img src={this.props.data.images[2]} alt="" />
            </li>
        </ul>
        )
    }
}