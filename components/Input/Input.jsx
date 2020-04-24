import React from 'react';
import './Input.css';

const clearInput = (e) => {
    e.target.value = '';
}

const input = (props) => (
    <div className="input">
        <input onKeyUp={props.onKeyUp} onKeyDown={props.onKeyDown} onClick={clearInput} id="noRefInput" readOnly="readonly" name="keyCommand" type="text" value={props.value} />
    </div>
)

export default input;