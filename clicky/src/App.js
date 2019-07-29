import React, { Component } from 'react';
import ChoiceCard from './components/ChoiceCard';
import clickables from './clickables.json';

class App extends Component {

    state = {
        clickables,
        score: 0,
        lost: false
    };

    clickDude = id => {
        // let clicked = search(id, this.state.clickables);
        let foundIndex = this.state.clickables.findIndex(clicked => clicked.id == id)
        const clickables = this.state.clickables;
        clickables[foundIndex].clicked = true;
        this.setState({ clickables });
    }
}