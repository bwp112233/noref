import React from 'react';
import './ClearAllButton.css';

const ClearAll = (props) => {

    return (
        <div onClick={props.onClick} className='clearAllBox'> <p className='clearAll'>Clear All </p> </div>
    )
}

export default ClearAll;