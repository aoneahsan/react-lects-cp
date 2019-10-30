import React from 'react';

import './UserInput.css';
const userInput = (props) => {
    return (
        <div>
            <h3>!!!From UserInput Component!!!</h3>
            <input type="text" onChange={props.changeHandleFunction} value={props.name}/>
        </div>
    );
}

export default userInput;