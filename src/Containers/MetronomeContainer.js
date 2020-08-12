import React, { Component } from "react";
import BpmDisplay from "../Components/BpmDisplay";
import BpmSelector from "../Components/BpmSelector";
import PlayPauseButton from "../Components/PlayPauseButton";
import sound from "../beep";


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

    calculateBpm(bpm){
        return 60000/bpm;
    }

    handleBpmSelected(bpm){
        clearInterval(this.state.intervalId)
        this.setState({bpm});
        let id = setInterval(this.playSpicyAndFlash, this.calculateBpm(bpm))
        this.setState({intervalId: id})
    }

    playSpicyAndFlash() {
        sound.play();
        var oElem = document.getElementById('html');
        oElem.style.backgroundColor = oElem.style.backgroundColor === 'purple' ? 'yellow' : 'purple';
    }

    handlePlayPause(){
        if (!this.state.isPlaying) {
            let id = setInterval(this.playSpicyAndFlash, this.calculateBpm(this.state.bpm))
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
            <div id="html" className="metronome-container">
                <BpmDisplay bpm ={this.state.bpm} />
                <BpmSelector onBpmSelected = {this.handleBpmSelected}/>
                <PlayPauseButton onPlaying={this.handlePlayPause} />
            </div>
        )
    }
}

export default MetronomeContainer;
