import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchVideos, selectVideo} from '../actions/index';
import {bindActionCreators} from 'redux';

import ListItem from '../components/list-item';

class SectionRight extends Component {
    constructor(params) {
        super(params);

        this.state = {
            searchVideos: []
        };

        this.videoList = this.videoList.bind(this);
    }

    videoList() {
        return (
            this.props.playlistVideos.map((video) => {
                return (
                    <ListItem key={video.etag} video={video} selectVideo={this.props.selectVideo} />
                )
            })
        )
    }



    render() {
        return (
            <div className="section section-right">
                {this.videoList()}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchVideos:fetchVideos,
        selectVideo: selectVideo
    }, dispatch);
}

function mapStateToProps(state) {
    return {playlistVideos: state.playlistVideos}
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionRight);
