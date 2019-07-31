import React from 'react';
import './style.css'

function ChoiceCard (props) {
    return (<div className='card'>
        <div className='img-container'>
            <img alt={props.name} src={props.image}
            onClick={() => props.clickDude(props.id)}
            ></img>
        </div>
    </div>
    );
}

export default ChoiceCard;
