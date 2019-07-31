import React, { Component } from 'react';
import ChoiceCard from './components/ChoiceCard';
import Wrapper from './components/Wrapper';
import clickables from './clickables.json';

class App extends Component {

    state = {
        clickables,
        score: 0,
    };

    clickDude = id => {
        // let clicked = search(id, this.state.clickables);
        let foundIndex = this.state.clickables.findIndex(clicked => clicked.id === id);
        const clickables = this.state.clickables;
        let selection = clickables[foundIndex];
        if(selection.clicked === true) {
            for(let i = 0; i < clickables.length; i++) {
                clickables[i].clicked = false;
            }
            this.setState({ clickables, score: 0});
            console.log(clickables[foundIndex]);
        }else{
            clickables[foundIndex].clicked = true;
            let newScore = this.state.score + 1
            this.setState({clickables, newScore});
            console.log(clickables[foundIndex]);
        }

        
    }


    

    render() {
        return (
            <Wrapper>
            {this.state.clickables.map(clickable => (
              <ChoiceCard
                clickDude ={this.clickDude}
                resetGame={this.resetGame}
                id={clickable.id}
                image={clickable.image}
                keygh={clickable.id}
              />
            ))}
            </Wrapper>
        );
    }
}

export default App;
