import React from 'react';

const WithClass = (props) => {
    return (
        <div className={props.componentClasses}>
            {props.children}
        </div>
    );
};

export default WithClass;