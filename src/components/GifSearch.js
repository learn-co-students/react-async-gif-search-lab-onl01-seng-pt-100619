import React from 'react'

export default class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    searchHandler = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.search)
    }

    handleSearchInput = (event) => {
        this.setState({search: event.target.value})
    }

    render() {
        return (
            <form>
                <span>Enter Search Term: </span>
                <input type='text' onChange={event => this.handleSearchInput(event)} value={this.state.search} />
                <button type='submit' onClick={event => this.searchHandler(event)}>Search</button>
            </form>
        )
    }
}