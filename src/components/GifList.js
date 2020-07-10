import React, {Component} from 'react'

class GifList extends Component {

    renderList = () => {
        return this.props.imgData.map(img => (
            <li key={img.id}><img key={img.id}src={img.url} alt={img.title} /></li>
        ))
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

export default GifList