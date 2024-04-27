import React from "react"
import { Link } from "react-router-dom"

import "./admissionstyles.css"
import imgad0 from "../homepage/image1.jpg"
import imgad1 from "./imgad1.jpg"
import imgad2 from "./imgad2.jpg"
import imgad3 from "./imgad3.jpg"
import imgad4 from "./imgad4.jpg"
import imgad5 from "./imgad5.jpg"
import imgad6 from "./imgad6.jpg"

import Personal from "./Personal"
import Log from "./Log"

function Admission () {
    return (
        <div className="whole-admission-container">
            <div className="admission-background">
                <div className="ad-image">
                    <img src={imgad3} alt="mindhaven-students" className="ad-img"/>
                    <img src={imgad5} alt="mindhaven-students" className="ad-img"/>
                </div>
                <div className="adm-title">
                    <h1>Apply Now and Join us at MindHaven School Inc</h1>
                    <p>A Place to Learn, Laugh, and Love</p>
                </div>
                <div className="adm-form">
                    <Personal />
                    <Log />
                </div>
            </div>
        </div>
    )
}

export default Admission