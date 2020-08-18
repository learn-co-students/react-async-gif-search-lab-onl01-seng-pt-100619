import React from 'react';

const GifList = (props) => {
    return(
        <div>
            <br/>
            <u>
                {props.gifs.map(gif => <li><img key={gif.id} src={gif.url} alt="gif" /> </li>)}
            </u>
        </div>
    )
}

export default GifList;