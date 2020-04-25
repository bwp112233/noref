import React from 'react';
import './Header.css';

const Header = (props) => {

    return (
        <div className="noRefHeader">
            <p onClick={props.toggle} className="headerText">{props.title} </p>
            {props.children}
        </div>
    )
}

export default Header;