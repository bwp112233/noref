import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Header from '../Header/Header';
import { getStorage, deleteHistoryItem } from '../../src/js/storage';
import './History.css';
import HistoryItem from './HistoryItem';
import fadeOut from '../../src/js/fadeEffect';
import confirmStyle from '../../src/js/confirmStyle';
import ClearAll from '../Button/ClearAllButton';


class History extends React.Component {
    state = {
        active: false,
        previousClip: []
    }

    toggleHistory = () => {
        const current = this.state.active;
        this.setState({ active: !current });
        this.props.testToggle();
    }

    loadHistory = async () => {

        let history = await getStorage('clip');

        history = history.clip.reverse();

        this.setState({ previousClip: history });

    }

    clearAll = async () => {
        await deleteHistoryItem('all');
        this.loadHistory();
    }

    deleteEntry = async (e) => {

        await deleteHistoryItem(e.target.closest('#historyText').children[0].innerText);
        this.loadHistory();

    }

    copyEntry = (e) => {
        const copyBox = document.createElement("textarea");
        document.body.appendChild(copyBox);
        copyBox.value = e.target.closest('#historyText').children[0].innerText;
        copyBox.select();
        document.execCommand("copy");
        document.body.removeChild(copyBox);
        document.body.insertAdjacentHTML("beforeend", `<div id="confirmDivBox999" style="${confirmStyle}">Copied!</div>`);
        fadeOut();
    }

    componentDidMount() {
        this.loadHistory();
    }

    render() {
        let history;


        if (this.state.previousClip === undefined || this.state.previousClip.length === 0) {
            history = (<div className='empty'><i class="fas fa-broom"></i></div>)

        } else {


            history = this.state.previousClip.map((clip, i) => {
                return <HistoryItem
                    key={i}
                    clip={clip}
                    deleteEntry={this.deleteEntry}
                    copyEntry={this.copyEntry}
                />
            })
        }

        return (
            <div className={this.state.active ? "historyPage open" : "historyPage close"}>

                <Header toggle={this.toggleHistory}
                    title={<p className="back">Back</p>}>
                    {this.state.previousClip.length > 0 ? <ClearAll onClick={this.clearAll} /> : null}
                </Header>

                <div className="historyText">
                    {history}
                </div>

            </div>
        )
    }
}

export default History;