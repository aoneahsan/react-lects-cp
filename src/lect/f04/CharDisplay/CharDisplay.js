import React from 'react';

import './CharDisplay.css';

const charDisplay = (props) => {

    const styleProperties = {
        backgroundColor: "white",
        color: "black",
        padding: "14px",
        fontSize: "18px",
        border: "2px solid black",
        display: "inline-block",
        margin: "5px"
    }

    return (
        <div style={styleProperties} onClick={props.clicked}>
            {props.character}
        </div>
    );

}

export default charDisplay;