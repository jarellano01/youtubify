import React, {Component} from 'react';
import SectionLeft from '../containers/section-left';
import SectionRight from '../containers/section-right';
import SectionCenter from '../containers/section-center';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <SectionLeft />
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