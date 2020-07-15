import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.search)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search<input onChange={this.handleChange} name="search" type="text" value={this.state.search}></input></label>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
