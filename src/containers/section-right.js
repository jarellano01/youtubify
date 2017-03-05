import React, {Component} from 'react';
import axios from 'axios';

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
                q: "Classical Guitar"
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
                {this.videoList()}
            </div>
        )
    }
}
export default SectionRight;


