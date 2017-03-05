import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

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
        console.log(this.state.searchVideos);
        return (
            this.state.searchVideos.map((video) => {
                return (
                    <ListItem key={video.etag} video={video} />
                )


            })
        )
    }

    componentWillMount() {
        const API_KEY = "AIzaSyCDckXGCJkOP4GzbEZbND97quu9LIzZA7E";
        let baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`;
        let self = this;

        axios.get(baseUrl, {
            params: {
                part: "snippet",
                q: "chino y nacho"
            }
        })
            .then(function (response) {
                self.setState({
                    searchVideos: response.data.items
                });
            })
    }

    render() {
        return (
            <div className="section section-right">
                <h4>Playlist Title</h4>
                {this.videoList()}
            </div>
        )
    }
}
export default SectionRight;


