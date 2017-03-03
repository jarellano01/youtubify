import React, {Component} from 'react';

import SearchBar from '../containers/search_bar.js';
import VideoList from '../containers/video_list.js';
import VideoDetail from '../containers/video_detail.js';


export default class App extends Component {
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail />
                <VideoList />
            </div>
        )
    }
}