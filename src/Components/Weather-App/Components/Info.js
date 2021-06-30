import React from 'react'


const Info = () => {
    return (
    <div class = "weatherInfo"> 
        <div class = "temperature">
            <span id = "temp"></span>
        </div>
        <div class = "description">    
            <div id = "condition" class = "weatherCondition"></div>    
            <div id = "location" class = "place"></div>
        </div>
    </div>
    )
}
export default Info