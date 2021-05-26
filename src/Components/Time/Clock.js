import React from 'react'

const Clock = ({formattedDate}) => {
    return (
        <div className="time-sp-date">
            <h1 className="time-date">{formattedDate}</h1>
        </div>
    )
}

export default Clock
