import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <p id='button' onMouseUp={props.mouseUp} onClick={props.action} onContextMenu={props.action} className="button">{props.text}</p>
    )
}

export default Button;