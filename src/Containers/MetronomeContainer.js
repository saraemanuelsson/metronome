import React, { Component } from "react";
import BpmDisplay from "../Components/BpmDisplay";
import BpmSelector from "../Components/BpmSelector";
import PlayPauseButton from "../Components/PlayPauseButton";

class MetronomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bpm: 150,
            isPlaying: false
        }
        this.handleBpmSelected = this.handleBpmSelected.bind(this)
    };

    handleBpmSelected(bpm){
        this.setState({bpm});
    }
    
    render() {
        return (
            <div className="metronome-container">
                <BpmDisplay bpm ={this.state.bpm} />
                <BpmSelector onBpmSelected = {this.handleBpmSelected}/>
                <PlayPauseButton />
            </div>
        )
    }
}

export default MetronomeContainer;
