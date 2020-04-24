import React from 'react';
import './MenuItem.css';

const menuItem = (props) => {

    return (<div className="menuItem">
        <div onClick={props.open}
            className={props.class}>
            <p className="menuText">{props.innerText}</p>
        </div>

        {props.entry}
        {props.children}
    </div>)
};

export default menuItem;