import React, { Component } from 'react';
import './Player.css';
import moment from 'moment';

export default class PlayerListItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            isPlaying: false,
            audio: new Audio(this.props.url)
        }

        this.state.audio.addEventListener("canplaythrough", this.onLoadedMeta.bind(this), false);        
    }

    onLoadedMeta(){
        this.setState({ timeLeft: moment((this.state.audio.duration  - this.state.audio.currentTime ) * 1000).format("mm:ss") });
    }

    // To set time duration remaining
    ontTimeUpdate(){
        this.setState({ timeLeft: moment((this.state.audio.duration  - this.state.audio.currentTime ) * 1000).format("mm:ss") });
    }

    pauseAll(){
        this.state.audio.pause();
        this.refs.playPause.className = "fas fa-play paused"; 
        this.setState({
            isPlaying: false
        });
    }
    playAudio(){
        this.props.pauseAll();
        if(!this.state.isPlaying ){                        
            this.state.audio.play(this.props.url);
            this.refs.playPause.className = "fas fa-pause playing";         
            this.state.audio.addEventListener("timeupdate", this.ontTimeUpdate.bind(this), false);
        }else{
            this.state.audio.pause();
            this.refs.playPause.className = "fas fa-play paused";                     
            this.state.audio.removeEventListener("timeupdate", this.ontTimeUpdate.bind(this), false);
        }
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

    render(){
        return (
                <div onClick={this.playAudio.bind(this)}>
                    <div className="song-list-item">
                        <div>
                            <div className="title-text">
                                {this.props.title}
                            </div>
                            <div className="subtitle-text">
                                <div className="artist-text">
                                    Artist: {this.props.artist}
                                </div>
                                <div className="duration-text">
                                    <i ref="playPause" className="fas fa-play paused" onClick={this.playAudio.bind(this)}></i>
                                    {this.state.timeLeft ? this.state.timeLeft : '00:00'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}