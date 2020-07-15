import React, {Component} from 'react'

class GifSearch extends Component {
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input type="text"  />
                <input type="submit" />
            </form>    
        )
    }
}

export default GifSearch