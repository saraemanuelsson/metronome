import React, { Component } from "react";
import BpmDisplay from "../Components/BpmDisplay";
import BpmSelector from "../Components/BpmSelector";
import PlayPauseButton from "../Components/PlayPauseButton";

class MetronomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bpm: null,
            isPlaying: false
        }
    };

    render() {
        return (
            <div className="metronome-container">
                <BpmDisplay />
                <BpmSelector />
                <PlayPauseButton />
            </div>
        )
    }
}

export default MetronomeContainer;
