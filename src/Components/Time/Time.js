import React from 'react'
import Clock from './Clock'
import {useState} from 'react'

const Time = ({text}) => {
    //Live clock
    let time = new Date().toLocaleTimeString()
    const [Ctime, setCtime] = useState(time); 
    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    }

    setInterval(() => {
        updateTime()
    }, 1000)


    return (
        <div className="time">
            <div className="time-sp-wish">
                <p className="time-wish">{text}</p>
            </div>
            <Clock formattedDate={Ctime}/>
        </div>
    )
}

export default Time
