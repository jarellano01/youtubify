import React, {Component} from 'react';
import {Link} from 'react-router';

class SectionHeader extends Component {
    render() {
        return (
            <div className="section section-header">
                <Link to="/search" className="btn btn-primary pull-right">
                    Search
                </Link>
            </div>
        )
    }
}

export default SectionHeader;