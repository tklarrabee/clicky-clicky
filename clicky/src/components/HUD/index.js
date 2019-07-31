import React from 'react';
import clickables from '../../clickables.json'

function HUD(props) {
    return (
        <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand">
                <img src={clickables[0].image} width="30" height="30" alt="" />
            </span>
            <h1 className='text-white'>
                {props.score}
            </h1>
        </nav>
    )
}

export default HUD;
