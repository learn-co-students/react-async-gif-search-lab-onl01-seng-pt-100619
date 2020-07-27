import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  //constructor
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  render() {
    return (
      <div>
        <GifList images={this.state.gifs} />
        <GifSearch onClick={this.handleSearch} />
      </div>
    );
  }
  handleSearch = (searchTerm) => {
    console.log(searchTerm);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((resp) => resp.json())
      .then((data) => {
        //some data
        console.log(data);
        this.setState({
          gifs: data.data.slice(0, 3),
        });
      });
  };
}

export default GifListContainer;
