import React, {Component}  from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchVideos} from '../actions/index';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e){
        this.setState({
            term: e.target.value
        });

        fetchVideos(this.state.term);
        console.log(this.props.searchResults);


    }


    render() {
        return (
            <div className="search">
                <Link to="/" className="btn btn-primary search-close">
                    Close
                </Link>
                <div className="col-sm-6">
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
                <ul className="col-sm-12 search-results">
                </ul>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchVideos: fetchVideos
    }, dispatch);
}

function mapStateToProps(state) {
    return {searchResults: state.searchResults}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);