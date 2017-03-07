import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ControlBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerActive: false
        };

        this.onPlayPauseVideo = this.onPlayPauseVideo.bind(this);
    }



    onPlayPauseVideo() {
        if(this.props.player == null){
            return;
        }
        if(this.props.player.getPlayerState() == 1){
            this.props.player.pauseVideo();
            this.setState({
                playerActive: false
            })
        }
        else{
            this.props.player.playVideo();
            this.setState({
                playerActive: true
            })
        }
    }


    render() {
        return (
            <div className="control-bar">
                <button className="btn btn-default" onClick={() => this.onPlayPauseVideo()}>{this.props.playerState == 1 ? "Pause" : "Play"}</button>
                <button className="btn btn-default" >Change Video</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {
        player: state.player,
        playerState: state.playerState
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
