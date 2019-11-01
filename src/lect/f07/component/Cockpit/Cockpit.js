import React, {useEffect, useRef, useContext} from 'react';

import AuthContext from './../../context/auth-context/auth-context';

import './Cockpit.css';

const CockPit = (props) => {
    
    const toggleBtnRef = useRef(null);

    const authContextVar = useContext(AuthContext);

    useEffect( 
        () => {
            // props.tooglePersons(); // this was doing the same as below but below is more better method
            toggleBtnRef.current.click();
            console.log("i will only run one time");
            return () => {
                console.log("This will run when this component deletes");
            };
        }, []);

    let text_classes = ['text'].join(' ');
    if (props.personsLength <= 2) {
        text_classes = ['red_text', 'text'].join(' ');
    }
    if (props.personsLength <= 1) {
        text_classes = ['red_text', 'bold_text', 'text'].join(' ');
    }
    
    let btn_classes = ["green_button"].join(' ');
    if (props.personsShow) {
        btn_classes = ["green_button red_button"].join(' ');
    }

    return (
        <div className="cockpit">
            <span className={text_classes}>{props.appName}</span>
            <button 
                ref={toggleBtnRef} 
                className={btn_classes} 
                onClick={props.tooglePersons}>Toggle Persons</button>
            <AuthContext.Consumer>
                {(context) => {
                    return (<button onClick={context.login}>Login</button>);
                }}
            </AuthContext.Consumer>
        </div>
    );
}

export default CockPit;