import React from 'react';

const historyItem = (props) => {

    return (<div id="historyText" className="historyWrapper">
        <div className="historyEntry"><p className="historyText">
            <a href={props.clip}> {props.clip}</a> </p>
        </div> <div className="icons">
            <div onClick={props.copyEntry}><i class="far fa-copy"></i>
            </div>
            <div onClick={props.deleteEntry}>
                <i class="far fa-trash-alt"></i>
            </div></div></div>)
}

export default historyItem; 