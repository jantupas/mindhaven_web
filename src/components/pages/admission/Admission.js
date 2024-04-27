import React from "react"
import { Link } from "react-router-dom"

import "./admissionstyles.css"

import capimg4 from "../../images/capimg4.jpg"
import capimg3 from "../../images/capimg3.jpg"


import Personal from "./Personal"
import Log from "./Log"

function Admission () {
    return (
        <div className="whole-admission-container">
            <div className="admission-background">
                <div className="ad-image">
                    <img src={capimg4} alt="mindhaven-students" className="ad-img"/>
                    <img src={capimg3} alt="mindhaven-students" className="ad-img"/>
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