import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import History from '../History/History';
import ConfigPage from '../ConfigPage/ConfigPage';
import Header from '../Header/Header';
import About from '../About/About';
import { getStorage } from '../../src/js/storage';
import './HomePage.css';

class HomePage extends Component {

    constructor(props) {

        super(props);
        this.state = {
            showConfig: false,
            showHistory: false,
            shoutAbout: false,
            currentKey: [],
            fullURL: []
        }
        this.toggleConfig = React.createRef();
        this.toggleHistory = React.createRef();
        this.toggleAbout = React.createRef();
        this.testToggle = this.testToggle.bind(this);
    }

    homeClass = ['home'];

    loadKeys = (e) => {

        getStorage('keyCommand').then(result =>
            this.setState({ currentKey: result.keyCommand }))
        getStorage('fullCommand').then(result => {

            this.setState({ fullURL: result.fullCommand })
        })
    }


    closePageHandler = () => {
        this.setState({
            showConfig: false,
            showHistory: false
        });
    }

    checkSize = () => {
        if (!this.state.showHistory) {
            this.homeClass = ['home', 'bigger'];
        } else {
            this.homeClass = ['home'];
        }
    }

    showHistoryHandler = () => {
        this.toggleHistory.current.toggleHistory();
        this.setState({ showHistory: true })
    }

    showConfigHandler = () => {
        this.toggleConfig.current.toggleConfig();
        this.setState({ showConfig: true })
    }

    showAboutHandler = () => {
        this.toggleAbout.current.toggleAbout();
        this.setState({ showAbout: true })
    }

    testToggle = () => {
        const currentState = this.state.showHistory;
        this.setState({ showHistory: !currentState });
        this.checkSize();
    }

    componentDidMount() {
        this.loadKeys();
    }

    render() {
        return (
            <div className={this.homeClass.join(' ')}>

                <ConfigPage ref={this.toggleConfig}
                    loadKeys={this.loadKeys}
                    fullURL={this.state.fullURL}
                    currentKey={this.state.currentKey} />

                <History ref={this.toggleHistory}
                    testToggle={this.testToggle} />

                <About ref={this.toggleAbout} />

                <Header title={'NoRef'} />

                <MenuItem
                    class={"select"}
                    innerText='Configure'
                    open={this.showConfigHandler} />

                <MenuItem
                    class={"select"}
                    innerText="Clip History"
                    open={this.showHistoryHandler} />

                <MenuItem
                    open={this.showAboutHandler}
                    class={"select"}
                    innerText="About"
                />
            </div>
        );
    }
}

export default HomePage;