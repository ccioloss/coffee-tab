import React, { useState, useRef } from 'react'
import Modal from 'react-modal'
import App from '../../App'
import {BsGearWideConnected} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Settings = () => {
    const [modalIsOpen, setModalOpen] = useState(false)
    function changeName(){
        if (document.getElementById("changeName").value !== "" ){
            localStorage.setItem("name", document.getElementById("changeName").value);
        }
    }
    function changeLocation(){
        if (document.getElementById("changeLocation").value !== "" ){
            localStorage.setItem("location", document.getElementById("changeLocation").value)
        }
    }
    return (
            <div>
                <BsGearWideConnected class = "cog" size = {50} onClick = {() => setModalOpen(true)}/>
                <Modal isOpen = {modalIsOpen} style={
                    { overlay: {background: "rgba(0, 0, 0, 0.5)"}, content: {width: "30%", height: "55%", position: "absolute", margin: "auto"}}}>
                    <AiOutlineCloseCircle class = "closeSettings" size = {25} onClick = {() => setModalOpen(false)} />
                    <form>
                        <div class = "settingsElement">
                            <div class="input">
                                <input id = "changeName"  type="text" class="input-field"/>
                                <label class="input-label">New Name</label>
                            </div>
                            <div class="action">
                                <button class="action-button" onClick = {() => changeName()}>Change Name</button>
                            </div>
                        </div>
                        <div class = "settingsElement">
                            <div class="input">
                                <input id = "changeLocation"  type="text" class="input-field"/>
                                <label class="input-label">New Location</label>
                            </div>
                            <div class="action">
                                <button class="action-button" onClick = {() => changeLocation()}>Change Location</button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>
    )
}

export default Settings