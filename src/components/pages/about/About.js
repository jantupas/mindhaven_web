import React from "react"
import { Link } from "react-router-dom"

import Vismis from "./Vismis"
import Background from "./Background"
import "./aboutstyles.css"

import capimg12 from "../../images/capimg12.jpg"
import capimg13 from "../../images/capimg13.jpg"


function About () {
    return (
        <div className="whole-about-container">
            <div className="about-background">
            <div className="ad-image">
                    <img src={capimg12} alt="mindhaven-students" className="ad-img"/>
                    <img src={capimg13} alt="mindhaven-students" className="ad-img"/>
                </div>
                <div className="about-title">
                    <h1>We are MindHaven School Inc</h1>
                    <p>Get to know our school.</p>
                </div>
                <Vismis id="vismis"/>
                <br />
                <br />
                <Background id="background"/>
            </div>
        </div>
    )
}
export default About