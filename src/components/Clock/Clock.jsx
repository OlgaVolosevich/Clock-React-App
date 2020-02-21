import React from 'react';

const Clock = ({ time }) => {
    return (
        <h1>{time.toLocaleTimeString()}</h1>
    );
}

export default Clock;