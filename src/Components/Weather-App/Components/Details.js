import React from 'react'
import {ImDroplet} from 'react-icons/im';
import {BiCloudRain, BiWind} from 'react-icons/bi'

const Details = () => {
    return (
        <div class = "icons">
            <div class = "element">
                <ImDroplet size = {40}/> 
                <p id = "humidity"></p>
            </div>
            <div class = "element">
                <BiWind size = {40}/>
                <p id = "wind"></p>
            </div>
            <div class = "element">
                <BiCloudRain size = {40}/>
                 <p id = "precip"></p>
            </div>
        </div>
    )
}
export default Details