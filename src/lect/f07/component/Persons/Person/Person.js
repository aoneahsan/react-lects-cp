import React, {Component} from 'react';

import AuthContext from './../../../context/auth-context/auth-context';

import './Person.css';

class Person extends Component {
    
    static contextType = AuthContext;

    componentDidMount() {
        console.log("[Person.js] context in react are like services in angular, use to pass data between component");
        console.log("[Person.js]",this.context.aithenticated);
    }

    render() {
        return (
            <div className="Person">
                <p>{this.context.aithenticated ? "Authenticated!" : "Please Login!"}</p>
                <p onClick={this.props.clicked}>I am {this.props.personName} and i am {this.props.personAge}</p>
                <input type="text" onChange={this.props.personChangeHandler} value={this.props.personName} />
            </div>
        );
    }
};

export default Person;