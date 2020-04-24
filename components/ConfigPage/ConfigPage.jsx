import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { setStorage, setCodes } from '../../src/js/storage';
import './ConfigPage.css';

let keyList = [];
let keyCodes = [];

class ConfigPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            keyMacro: null,
            keyCode: null,
            keys: null
        }
    }

    toggleConfig = () => {
        const current = this.state.active;
        this.setState({ active: !current });
    }

    keyListen = (e) => {
        if (!e.repeat) {

            e.preventDefault();
            if (keyList.length < 3) {
                keyList.push(e.key);
                keyCodes.push(e.keyCode);
                this.setState({
                    keyMacro: keyList,
                    keyCode: keyCodes
                });
            }
        }
    }

    keyRemove = (e) => {
        keyList.splice(keyList.indexOf(e.key), 1);
        keyCodes.splice(keyCodes.indexOf(e.keyCode), 1);

        this.setState({
            keyMacro: keyList,
            keyCode: keyCodes
        })
    }

    submitKey = (e) => {
        if (e.type === 'contextmenu') {
            e.preventDefault();
            const button = e.target.closest('#button');
            button.classList.add('buttonActive');
        }

        this.setState({
            keyMacro: null,
            keyCode: null
        });

        let type = (e.target.closest('#button').innerText === 'Set NoRef key') ? 'keyCommand' : 'fullCommand';
        let codes = (e.target.closest('#button').innerText === 'Set NoRef key') ? 'keyCodes' : 'fullCodes';
        setStorage(keyList, type);
        setCodes(keyCodes, codes);
        keyList = [];
        keyCodes = [];

        this.props.loadKeys();
    }

    mouseUp = (e) => {


        const button = e.target.closest('#button');
        button.classList.remove('buttonActive');

    }

    render() {
        return (
            <div className={this.state.active ? "configPage open" : "configPage close"}>


                <Header toggle={this.toggleConfig}
                    title={<p className="back">Back</p>} />


                <div className='currentKeyBox'>
                    <p className='currentKey'><strong>noRef:</strong> {this.props.currentKey ? this.props.currentKey.join(' + ') : 'Not Set'} </p>

                    <p className='currentKey'><strong>Full URL:</strong> {this.props.fullURL ? this.props.fullURL.join(' + ') : 'Not Set'}</p>
                </div>
                <MenuItem>
                    <Input onKeyUp={this.keyRemove} onKeyDown={this.keyListen} value={this.state.keyMacro ? this.state.keyMacro.join(' + ') : 'Click here to set hotkey(s)'} />
                </MenuItem>
                <div className="buttonBox">
                    <Button type={'full'} mouseUp={this.mouseUp} action={this.submitKey} text={'Set NoRef key'} />
                    <Button type={'noRef'} mouseUp={this.mouseUp} action={this.submitKey} text={'Set full URL key'} />
                </div>


            </div >
        )
    }
}

export default ConfigPage;
