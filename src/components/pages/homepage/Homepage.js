import React from "react"
import { Link } from "react-router-dom"

import "./homepage.css"
import Homeannounce from "./homeAnnouncement"
import Homenews from "./homeNews"
import Map from "../contact/Map"
import Carousell from "./Carousell"
import image1 from "./image1.jpg"
import img1 from "../../images/capimg1.jpg"
import img2 from "../../images/capimg2.jpg"
import img3 from "../../images/capimg3.jpg"
import img4 from "../../images/capimg4.jpg"
import img5 from "../../images/capimg5.jpg"
import img6 from "../../images/capimg6.jpg"
import img7 from "../../images/capimg7.jpg"
import img8 from "../../images/capimg8.jpg"
import img9 from "../../images/capimg9.jpg"
import img10 from "../../images/capimg10.jpg"
import img11 from "../../images/capimg11.jpg"
import img12 from "../../images/capimg12.jpg"
import img13 from "../../images/capimg13.jpg"


function Homepage (){
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img13]
    return (
        <div className="whole-home-container">
            <div className="home-background">
            <div className="home-welcome-image">
                    <img src={image1} alt="welcome" className="welcome-image"/>
                </div>
                <div className="home-welcome">
                    <h1>A Warm and Hearty Welcome to <br /> MindHaven School Inc</h1>
                    <p>A Place to Learn, Laugh, and Love, MindHaven has 30+ years of experience as a play-based non-traditional school.</p>
                </div>
                <div className="image-carousell-home">
                    <Carousell images={images}/>
                </div>
                <div className="home-title">
                    <h1>Featured Announcements</h1>
                    <p>The featured announcements provided by the school.</p>
                </div>
                <div className="home-anns">
                    <Homeannounce/>
                </div>
                <div className="home-title">
                    <h1>Latest News and Events</h1>
                    <p>The latest news and events provided by the school.</p>
                </div>
                <div className="home-anns">
                    <Homenews/>
                </div>
                <div className="home-title">
                    <h1>Visit Our Location</h1>
                    <p>You can visit us by using the map to see our location.</p>
                </div>
                <div className="home-map">
                    <Map />
                </div>
            </div>
        </div>
    )
}
export default Homepage