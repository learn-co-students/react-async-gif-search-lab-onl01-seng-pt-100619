import React, { Component } from "react";

export class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.images.map((image) => (
          <li>
            <img src={image.images.original.url} />
          </li>
        ))}
      </ul>
    );
  }
}

export default GifList;
