import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchVideos} from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount(){
        this.props.fetchVideos('Chino y Nacho');
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
        this.props.fetchVideos(this.state.term)

    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchVideos}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
