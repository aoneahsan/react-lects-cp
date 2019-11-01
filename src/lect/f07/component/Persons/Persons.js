import React from 'react';

import Person from './Person/Person';

const Persons = (props) => props.personsData.map((person, index) => {
            return <Person 
                key={person.id} 
                personName={person.name} 
                personAge={person.age} 
                clicked={()=> {props.personDelete(index)}}
                personChangeHandler={(event) => {props.personChangeHandler(event, person.id)}} />
        });

export default Persons;