import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage';


class NoRefApp extends Component {

    render() {
        return (
            <div className="noRefApp">
                <HomePage />
            </div>
        );
    }
}

export default NoRefApp;
