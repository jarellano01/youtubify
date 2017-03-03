import React, {Component} from 'react';
import VideoListItem from './video_list_item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectVideo} from '../actions/index';


class VideoList extends Component {
    constructor(props) {
        super(props);
        this.videoListItem = this.videoListItem.bind(this)
    }

    videoListItem(props) {
        return (
            this.props.videos.map((video) => {
                    return (
                        <VideoListItem
                            key={video.etag}
                            video={video}
                            onVideoSelect={props.selectVideo}
                        />
                    )
                }
            )

        )
    }

    render() {
        return (
            <div>
                <ul className="col-md-4 list-group">
                    {this.videoListItem(this.props)}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectVideo}, dispatch);
}

function mapStateToProps(state) {
    return {
        videos: state.videos,
        selectedVideo: state.selectedVideo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
