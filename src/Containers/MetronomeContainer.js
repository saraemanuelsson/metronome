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
        this.handlePlayPause = this.handlePlayPause.bind(this)
    };

    handleBpmSelected(bpm){
        this.setState({bpm});
    }

    handlePlayPause(){
        this.setState((prevState) => {
            return {
                isPlaying: !this.prevState
            }
        })
    }
    
    render() {
        return (
            <div className="metronome-container">
                <BpmDisplay bpm ={this.state.bpm} />
                <BpmSelector onBpmSelected = {this.handleBpmSelected}/>
                <PlayPauseButton onPlaying={this.handlePlayPause} />
            </div>
        )
    }
}

export default MetronomeContainer;
