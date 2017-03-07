import React from 'react';

const SearchListItem = ({video}) => {
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={video.snippet.thumbnails.default.url} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
};

export default SearchListItem;
