import React from "react"
import { Link } from "react-router-dom"

import Announcementcont from "./Announcementcont"
import Newscont from "./Newscont"
import "./announcementstyles.css"

function Announcement () {
    return (
        <div className="whole-ann-container">
            <div className="ann-background">
                <div>
                    <div className="ann-page-title">
                        <h1>OFFICIAL SCHOOL ANNOUNCEMENTS</h1>
                        <p>All the official announcements provided by the school.</p>
                    </div>
                    <Announcementcont />
                </div>
                <div>
                <div className="ann-page-news">
                        <h1>LATEST NEWS</h1>
                        <p>All the latest news and updates provided by the school.</p>
                    </div>
                    <Newscont />
                </div>
            </div>
        </div>
    )
}
export default Announcement