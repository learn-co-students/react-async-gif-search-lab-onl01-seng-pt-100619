import React, {Component} from 'react';

export default class GifSearch extends Component{
    constructor(){
        super()
        this.state = {
            search: ''
        }
    }

    updateSearch(searchText){
        this.setState({
            search: searchText
        })
        // console.log(this.state.search)
    }

    render(){
        return (
            <form onSubmit={event => this.props.searchGifs(event, this.state.search)}>
                <input onChange={event=> this.updateSearch(event.target.value)}value={this.state.input}></input>
                <input type="submit"/>
            </form>
        )
    }

}