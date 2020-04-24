import * as React from "react";
import './Trash.css';

function SvgTrash(props) {
    return (
        <div className="iconDiv">
            <svg viewBox="0 0 26 26" width={15} height={15} {...props}>
                <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={10}
                    strokeWidth={2.08}
                    d="M17 4.429C17 5.849 15.881 7 14.5 7h-3C10.119 7 9 5.849 9 4.429v-.858C9 2.15 10.119 1 11.5 1h3C15.881 1 17 2.15 17 3.571v.858z"
                />
                <path
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M21 23a2 2 0 01-2 2H7a2 2 0 01-2-2V6h16v17zm-4-13v12m-4-12v12M9 10v12"
                />
                <path d="M23 6V5c0-.551-.449-1-1-1H4c-.551 0-1 .449-1 1v1H2v2h22V6h-1z" />
            </svg>
        </div>
    );
}

export default SvgTrash;