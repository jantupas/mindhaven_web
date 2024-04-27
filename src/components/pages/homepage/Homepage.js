import React from "react"
import { Link } from "react-router-dom"

import "./homepage.css"
import Homeannounce from "./homeAnnouncement"
import Homenews from "./homeNews"
import Map from "../contact/Map"
import Carousell from "./Carousell"
import image1 from "./image1.jpg"
import img1 from "./imgexp.jpg"
import img2 from "./imgexp2.jpg"
import img3 from "./imgplay.jpg"
import img4 from "./imgplay2.jpg"
import img5 from "./imgprog.jpg"
import img6 from "./imgprog2.jpg"


function Homepage (){
    const images = [image1, img1, img2, img3, img4, img5, img6]
    return (
        <div className="whole-home-container">
            <div className="home-background">
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