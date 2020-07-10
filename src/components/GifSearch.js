import React, {Component} from 'react'

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGifs(this.state.userInput)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" onChange={this.handleChange} value={this.state.userInput}/>
                <input type="submit" value="search" />
            </form>
            )
    }

}

export default GifSearch