import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import YouTube from 'react-youtube';


const videoIdA = 'XxVg_s8xAms';
const videoIdB = '-DX3vJiqxm4';

class SectionCenter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoId: videoIdA,
            player: null,
            playerActive: false
        };

        this.onReady = this.onReady.bind(this);
        this.onChangeVideo = this.onChangeVideo.bind(this);
        this.onPlayPauseVideo = this.onPlayPauseVideo.bind(this);
    }

    onReady(event) {
        this.setState({
            player: event.target,

        });
    }

    onPlayPauseVideo() {
        console.log(this.state.player.getPlayerState());
        if(this.state.player.getPlayerState() == 1){
            this.state.player.pauseVideo();
            this.setState({
                playerActive: false
            })
        }
        else{
            this.state.player.playVideo();
            this.setState({
                playerActive: true
            })
        }
    }



    onChangeVideo() {
        this.setState({
            videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
        });
    }

    render(){
        const opts = {
            playerVars: {
                controls: 0,
                disablekb:1
            }
        };
        return (
            <div className="section section-center">
                <YouTube className="section-player" videoId={this.state.videoId} onReady={this.onReady} opts={opts}/>

                <div className="control-bar">
                    <button className="btn btn-default" onClick={this.onPlayPauseVideo}>{this.state.playerActive ? "Pause": "Play"}</button>
                    <button className="btn btn-default" onClick={this.onChangeVideo}>Change Video</button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionCenter);
