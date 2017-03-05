import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="list-item">
                <img src={this.props.video.snippet.thumbnails.default.url} alt=""/>
                <span>{this.props.video.snippet.title}</span>
            </div>
        )
    }
}

export default ListItem;