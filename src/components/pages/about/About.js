import React from "react"
import { Link } from "react-router-dom"

import Vismis from "./Vismis"
import Background from "./Background"
import "./aboutstyles.css"

function About () {
    return (
        <div className="whole-about-container">
            <div className="about-background">
                <div className="about-title">
                    <h1>Who We Are...</h1>
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