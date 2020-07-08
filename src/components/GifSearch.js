import React from 'react';

class GifSearch extends React.Component {

    state = {
        query: ''
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.searchHandler(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search Gifs</label>
                    <input type="text" value={this.state.query} onChange={this.handleChange}/>
                    <input type="Submit" />
                </form>
            </div>
        )
    }

}

export default GifSearch