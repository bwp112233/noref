import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import Header from '../Header/Header';
import { getStorage, deleteHistoryItem } from '../../src/js/storage';
import './History.css';
import HistoryItem from './HistoryItem';
import fadeOut from '../../src/js/fadeEffect';
import confirmStyle from '../../src/js/confirmStyle';


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
        if (this.state.active) {

        }

        if (this.state.previousClip === undefined || this.state.previousClip.length === 0) {
            history = (<MenuItem innerText='Empty!' />)

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
                    title={<p className="back">Back</p>} />

                <div className="historyText">
                    {history}
                </div>

            </div>
        )
    }
}

export default History;