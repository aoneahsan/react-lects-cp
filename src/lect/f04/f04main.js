import React, {Component} from 'react';

import CharDisplay from './CharDisplay/CharDisplay';
import Validation from './Validation/Validation';

class F04Main extends Component {

    state = {
        inputText: "",        
    }

    inputTextChangeHandler = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    inputTextCharacterDeleteHandler = (index) => {
        console.log(index);
        let charaterArr = this.state.inputText.split('');
        charaterArr.splice(index, 1);
        const newText = charaterArr.join('');
        this.setState({
            inputText: newText
        })
    }

    render() {
        const charlist = this.state.inputText.split('').map((item, index) => {
            return <CharDisplay key={index} character={item} clicked={() =>this.inputTextCharacterDeleteHandler(index)} />
        })
        return (
            <div>
                <input type="text" onChange={this.inputTextChangeHandler} value={this.state.inputText} />
                <p>{this.state.inputText}</p>
                <p>{this.state.inputText.length}</p>
                <h2>Validation Component</h2>
                <Validation inputTextLength={this.state.inputText.length} />
                <h2>CharDisplay Component</h2>
                {charlist}
            </div>
        );
    }

}

export default F04Main;