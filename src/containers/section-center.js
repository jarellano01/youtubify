import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPlayer, setPlayerState} from '../actions/index';

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
        this.onStateChange = this.onStateChange.bind(this);
    }

    onReady(event) {
       this.props.setPlayer(event.target);
    }

    onStateChange(e) {
        this.props.setPlayerState(e.data)
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
                disable:1
            }
        };
        return (
            <div className="section section-center">
                <YouTube className="section-player" videoId={this.props.selectedVideo.id.videoId} onReady={this.onReady} onStateChange={(e) => this.onStateChange(e)} opts={opts}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setPlayer, setPlayerState}, dispatch);
}

function mapStateToProps(state) {
    return {
        selectedVideo: state.selectedVideo,
        player: state.player
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionCenter);
