import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ControlBar extends Component {
    render() {
        return (
            <div className="control-bar">
                <button className="btn btn-default">Play</button>
                <button className="btn btn-default" >Change Video</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {selectedVideo: state.selectedVideo}
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
