import React from 'react';
import './DateInfo.scss';

const DateInfo = ({ date }) => {
    return(
        <div className="dateInfo-wrapper">
            <p>Today is {date.toLocaleString('En-en', {weekday : "long"})}</p> 
            <p>{date.toLocaleDateString()}</p>
        </div>
    )
}

export default DateInfo;