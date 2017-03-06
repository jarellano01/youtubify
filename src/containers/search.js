import React, {Component}  from 'react';
import {Link} from 'react-router';

class Search extends Component {
    render(){
        return(
            <div className="search">
                <Link to="/" className="btn btn-primary search-close">
                    Close
                </Link>
            </div>
        )
    }
}

export default Search;