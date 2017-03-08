import React, {Component}  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchVideos, addVideoToPlaylist} from '../actions/index';

import SearchListItem from '../components/search-list-item';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }

    onInputChange(e){
        this.setState({
            term: e.target.value
        });


        this.props.fetchVideos(this.state.term);
        console.log(this.state.term);



    }

    renderResults(){
        return (
            this.props.searchResults.map((video) => {
                return (
                    <SearchListItem
                        key={video.etag}
                        video={video}
                        onClick ={this.props.addVideoToPlaylist}
                    />
                )
            })
        )

    }


    render() {
        return (
            <div className="search">
                <Link to="/" className="btn btn-primary search-close">
                    Close
                </Link>
                <div className="col-sm-10">
                    <div className="input-group">
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            className="form-control"
                            placeholder="Search for..."
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Search</button>
                        </span>
                    </div>
                </div>
                <ul className="col-sm-8 search-results">
                    {this.renderResults()}
                </ul>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchVideos: fetchVideos,
        addVideoToPlaylist: addVideoToPlaylist
    }, dispatch);
}

function mapStateToProps(state) {
    return {searchResults: state.searchResults}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);