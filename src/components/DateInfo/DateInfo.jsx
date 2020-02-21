import React from 'react';

const DateInfo = ({ date }) => {
    return(
        <div>
            <h2>Today is {date.toLocaleString('En-en', {weekday : "long"})}</h2> 
            <h2>{date.toLocaleDateString()}</h2>
        </div>
    )
}

export default DateInfo;