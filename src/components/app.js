import React, {Component} from 'react';
import RootContent from './rootContent';


export default class App extends Component {
    render() {
        return (
            <div>
                <RootContent/>
                {this.props.children}
            </div>
        )
    }
}