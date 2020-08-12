import React from 'react';
import image from '../pause.svg'


const PlayPauseButton = (props) => {

    function handlePlayPause(){
        props.onPlaying()
    }

    return (
        <img src={image} width="50" onClick={handlePlayPause}/>
    )
}
export default PlayPauseButton;