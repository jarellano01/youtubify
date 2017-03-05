import React, {Component} from 'react';


const ListItem = ({video, selectVideo}) => {
    return (
        <div className="list-item" onClick={() => selectVideo(video)}>
            <img src={video.snippet.thumbnails.default.url} alt=""/>
            <span>{video.snippet.title}</span>
        </div>
    )
}

export default ListItem;