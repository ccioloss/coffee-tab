import React from 'react'
import Main from './Components/Main';

const Weather = (props) => {
    return (
        <div className = "weather-app" >
          <Main props={props}/>
        </div>
    )
}

export default Weather
