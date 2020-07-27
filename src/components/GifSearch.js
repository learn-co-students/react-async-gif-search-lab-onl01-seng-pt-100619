import React, { Component } from "react";

export class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  onSearchTermChanged = (event) => {
    // console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value,
    });
  };
  onButtonClicked = (event) => {
    this.props.onClick(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onSearchTermChanged} />
        <button onClick={this.onButtonClicked}> Search </button>
      </div>
    );
  }
}

export default GifSearch;
