import React from 'react';

import './UserOutput.css';
const userOutput = (props) => {
    return (
        <div>
            <h3>!!!From UserOutput Component!!!</h3>
            <p>i'm {props.name}</p>
            <p>Some Text 2</p>
        </div>
    );
}

export default userOutput;