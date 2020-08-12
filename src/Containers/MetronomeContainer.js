import React, { Component } from "react";
import BpmDisplay from "../Components/BpmDisplay";
import BpmSelector from "../Components/BpmSelector";
import PlayPauseButton from "../Components/PlayPauseButton";

class MetronomeContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            bpm: 150,
            isPlaying: false,
            intervalId: null
        }
        this.handleBpmSelected = this.handleBpmSelected.bind(this)
        this.handlePlayPause = this.handlePlayPause.bind(this)
    };

    calculateBpm(){
        return 60000/this.state.bpm;
    }

    handleBpmSelected(bpm){
        this.setState({bpm});
    }

    greet() {
        console.log("Hey");
    }

    handlePlayPause(){

        if (!this.state.isPlaying) {
            let id = setInterval(this.greet, 1000)
            this.setState({intervalId: id})
        } else {
            clearInterval(this.state.intervalId)
            this.setState({intervalId: null})
        }
        this.setState(() => {
            return {
                isPlaying: !this.state.isPlaying
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
