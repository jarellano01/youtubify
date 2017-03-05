import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SectionLeft extends Component {
    render(){
        return (
            <div className="section section-left">
                <h3>Youtube Lists</h3>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionLeft);
