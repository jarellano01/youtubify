import React, {Component} from 'react';

import SectionLeft from '../containers/section-left';
import SectionRight from '../containers/section-right';
import SectionCenter from '../containers/section-center';
import SectionHeader from '../containers/section-header';

export default class RootContent extends Component {
    render() {
        return (
                <div>
                    <SectionLeft />
                    <SectionHeader/>
                    <SectionCenter />
                    <SectionRight />
                </div>
        )
    }
}