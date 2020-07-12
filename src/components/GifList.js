import React from 'react'

const GifList = (props) => {

    const renderGifs = () => {
        return props.gifs.map((gif, id) => {
          return <li key={id}><img src={gif.images.original.url}/></li>
        })
      }

    return (
        <ul>
        {renderGifs()}
        </ul>
      )
      
}

export default GifList