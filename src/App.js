import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    
    state = {
        characters: [
        // {
        //     'name': 'Charlie',
        //     'job': 'Janitor'
        // },
        // {
        //     'name': 'Mac',
        //     'job': 'Bouncer'
        // },
        // {
        //     'name': 'Dee',
        //     'job': 'Aspring actress'
        // },
        // {
        //     'name': 'Dennis',
        //     'job': 'Bartender'
        // }
    ]
    };

    removeCharacter = indexID => {
        const { characters } = this.state;
        // let charactersCopy = this.state.characters;
        // charactersCopy.forEach((each)=>{

        // });
        this.setState({
            characters: characters.filter((character) => { 
                return character.id !== indexID;
            }),
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }
    render() {
        console.log(this.state.characters);
        // const characters = [{
        //         'name': 'Charlie',
        //         'job': 'Janitor'
        //     },
        //     {
        //         'name': 'Mac',
        //         'job': 'Bouncer'
        //     },
        //     {
        //         'name': 'Dee',
        //         'job': 'Aspring actress'
        //     },
        //     {
        //         'name': 'Dennis',
        //         'job': 'Bartender'
        //     }];

            
// pass the data through to the child component (Table) with properties,
// kind of how you might pass data through using data- attributes. 
// We can call the property whatever we want, as long as it’s not a reserved keyword,
// so I’ll go with characterData.

// The data I’m passing through is the characters variable,
// and I’ll put curly braces around it as it’s a JavaScript expression.
        return (
            <div className="container">
                <Table
                    characterData = {this.state.characters} 
                    removeCharacter={this.removeCharacter}/>
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}

export default App;