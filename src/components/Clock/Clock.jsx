import React from 'react';
import './Clock.scss'

const Clock = ({ time }) => {
    return (
        <p className="clock-wrapper">{time.toLocaleTimeString()}</p>
    );
}

export default Clock;