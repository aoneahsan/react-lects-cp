import React from 'react';

const validation = (props) => {

    

    return (
        <div>
            {                
                props.inputTextLength  <= 5 ? <p>Text too short! </p> : <p>Text too long! </p>
            }
        </div>
    );

}

export default validation;