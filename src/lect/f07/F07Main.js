import React, {Component} from 'react';

import CockPit from './component/Cockpit/Cockpit';
import Persons from './component/Persons/Persons';

import AuthContext from './context/auth-context/auth-context';

class F07Main extends Component {

    constructor(props) {
        super(props);

        this.anyElementRef = React.createRef();
    }

    componentDidMount() {
        console.log("changing showPersons value F07Main");

    }

    state = {
        persons: [
            {id: "1", name: "Asad", age: 23},
            {id: "2", name: "Ahsan", age: 20},
            {id: "3", name: "Hamza", age: 14}
        ],
        showPersons: false,
        authenticated: false
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
        // console.log(this.state.showPersons);
    }

    personChangeHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId;
        });

        const new_person = {...this.state.persons[personIndex]};
        new_person.name = event.target.value;

        const new_persons = [...this.state.persons];
        new_persons[personIndex] = new_person;

        this.setState({
            persons: new_persons
        });
    }

    deletePersonHandler = (index) => {
        console.log("clicked");
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    }

    loginHandler = () => {
        this.setState({
            authenticated: true
        })
    }
    
    render() {
        let persons = null;
    
        if (this.state.showPersons) {
            persons = (<Persons 
                        personsData={this.state.persons} 
                        personDelete={this.deletePersonHandler}
                        personChangeHandler={this.personChangeHandler} />);
        }
        return (
            <div>
                <AuthContext.Provider value={{
                    aithenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                    <CockPit 
                        appName="F07Main File"
                        personsLength={this.state.persons.length} 
                        tooglePersons={this.togglePersonHandler} 
                        personsShow={this.state.showPersons} />
                    {persons}
                </AuthContext.Provider>
            </div>
        );
    }

}

export default F07Main;