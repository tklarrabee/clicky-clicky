import React, { Component } from 'react';
import ChoiceCard from './components/ChoiceCard';
import Wrapper from './components/Wrapper';
import HUD from './components/HUD';
import Container from './components/Container';
import clickables from './clickables.json';

class App extends Component {

    state = {
        clickables,
        score: 0
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
            console.log(clickables[foundIndex]);
            this.shuffle(clickables)
            this.setState({score:newScore, clickables});
            
        }

        
    }

    shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
          [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
      }
    

    render() {
        return (
            <Wrapper>
                <HUD score={this.state.score} />
                <Container>
                    {this.state.clickables.map(clickable => (
                        <ChoiceCard
                            clickDude={this.clickDude}
                            resetGame={this.resetGame}
                            id={clickable.id}
                            image={clickable.image}
                            key={clickable.id}
                        />
                    ))}
                </Container>
            </Wrapper>
        );
    }
}

export default App;
