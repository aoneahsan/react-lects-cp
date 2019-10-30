import React, {Component} from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class F03Main extends Component {
    
    state = {
        userName: "Ahsan"
    };

    userNameChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>User Input Component</h1>
                <UserInput name={this.state.userName} changeHandleFunction={this.userNameChangeHandler}/>
                <hr />
                <h1>User Output Component</h1>
                <UserOutput name={this.state.userName}/>
                <UserOutput name={this.state.userName}/>
                <UserOutput name={this.state.userName}/>
            </div>
        );
    };
}

export default F03Main;