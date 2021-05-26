import React from 'react'
import Clock from "./Clock"

const Time = () => {
    const date = new Date()
    let formattedDate = date.toLocaleString("en-GB",{
        hour:'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    const text = "Good morning";
    const name = "Nick"

    return (
        <div className="time">
            <div className="time-sp-wish">
                <p className="time-wish">{text} {name}</p>
            </div>
            <Clock formattedDate={formattedDate}/>
        </div>
    )
}

export default Time
