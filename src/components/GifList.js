import React from 'react'

export default class GifList extends React.Component {

    render() {
       return (
        <ul>
            {this.props.data.images.map(image => {
                return (<li>
                    <img src={image} alt="" />
                </li>)
            })}
        </ul>
       )}
}