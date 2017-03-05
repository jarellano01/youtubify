import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchVideos} from '../actions/index';
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
            this.props.searchResults.map((video) => {
                return (
                    <ListItem key={video.etag} video={video} />
                )
            })
        )
    }

    componentWillMount() {
        this.props.fetchVideos('classical guitar');
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
    return bindActionCreators({fetchVideos}, dispatch);
}

function mapStateToProps(state) {
    return {searchResults: state.searchResults}
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionRight);
