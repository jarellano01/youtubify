import React, {Component} from 'react';
import SectionRight from '../containers/section-right';
import SectionCenter from '../containers/section-center';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="section section-left">
                        <h3>Youtube Lists</h3>
                    </div>
                    <div className="section section-header">
                        section header
                    </div>
                    <SectionCenter />
                    <SectionRight />

                </div>
            </div>
        )
    }
}