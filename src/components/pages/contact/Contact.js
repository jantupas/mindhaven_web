import React from "react"
import { Link } from "react-router-dom"
import Form from "./Form"
import Map from "./Map"
import Other from "./Other"
import Newsform from "./Newsform"
import "./contactstyles.css"

function Contact () {
    return (
        <div className="whole-contact-container">
            <div className="contact-background">
                <div className="contact-title">
                    <h1>GET IN TOUCH WITH US...</h1>
                    <p>Send us a message by filling up the form below.</p>
                </div>
                <Form />
                <div className="next-title">
                    <h1>VISIT OUR LOCATION...</h1>
                    <p>You can visit us by using the map to see our location.</p>
                </div>
                <Map />
                <div className="next-title">
                    <h1>OTHER METHODS...</h1>
                    <p>You may also reach us through our Facebook page, emails, or telephone.</p>
                </div>
                <Other />
                <br />
                <br />
                <Newsform />
            </div>
        </div>
    )
}
export default Contact