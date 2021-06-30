import React, { useState, useEffect } from 'react'
import Details from './Details'
import Info from './Info'
import {IoSyncCircleOutline} from 'react-icons/io5'

const Main = () => {
    const [city, setCity] = useState("Amsterdam")
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const [url, setUrl] = useState("");
    
    useEffect ( () => {
        getWeather();
    },[])
     
    function processData(data) {
        document.getElementById('temp').innerHTML = data.current.temp_c + "&deg";
        document.getElementById('humidity').innerHTML = data.current.humidity + "%";
        document.getElementById('wind').innerHTML = data.current.wind_kph + " k/h";

        if (typeof data.current.precip_mm !== 'undefined'){
            document.getElementById('precip').innerHTML = data.current.precip_mm + " mm";
        }
        else{
            document.getElementById('precip').innerHTML = "0 mm";
        }

        if (typeof data.current.condition.icon !== 'undefined'){
            setUrl(data.current.condition.icon)
        }

        document.getElementById('condition').innerHTML = data.current.condition.text;
        document.getElementById('location').innerHTML = data.location.name + "," + data.location.country;
        var date= new Date();
        document.getElementById('date').innerHTML = String(date.getDate()).padStart(2, '0') + " " + monthNames[date.getMonth() + 1];
        console.log(data)
    }

    function getWeather(){
        fetch('http://api.weatherapi.com/v1/current.json?key=4b38d677508f44e9b67100636212406&q=' + city)
        .then(response => response.json())
        .then(data => processData(data));
    }
    
    function refresh() {
        getWeather();
        let icon = document.getElementById("io");
        icon.classList.toggle("down");
    }

    return (
            <div class = "widget">
                <div class = "weatherIcon">
                    <img id = "icon" src={url}></img>
                    <Details/>
                    <IoSyncCircleOutline size = {30} id = "io" class = "rotate" onClick = {() =>  refresh()} /> 
                </div>
                <div class = "bottom">
                    <Info/>
                    <div id = "date" class = "date"></div>
                </div>
            </div>
    )
}

export default Main