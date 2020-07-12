import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    getGifs = (q="") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=ZmsXbavKI4vMkumUxdP5ZlaTEH0u5Zux&rating=g`)
          .then(response => response.json())
          .then(data => {
            if (data.data === undefined) {
              console.log("no gifs found")
            }
            else if (data.data.length > 3) {
              const first3 = data.data.slice(0, 3)
              this.setState({
                gifs: first3
              })
            } else {
              this.setState({
                gifs: data.data
              })
            }
    
          })
        }

      handleSubmit = (event) => {
        event.preventDefault()
        const query = event.target.children[0].value
        this.getGifs(query)
      }

    render() {
        return (
          <div>
          <GifSearch handleSubmit={this.handleSubmit}/>
          <GifList gifs={this.state.gifs} />
          </div>
        )
      }

      componentDidMount() {
        this.getGifs()
    }

}