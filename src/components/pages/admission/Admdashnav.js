import React from "react"
import { Link } from "react-router-dom"
import "./dashboardstyles.css"

function Admdashnav () {
    return (
        <div className="adm-dash-nav">
            <ul className="nav-content">
                <li>
                    <Link to="../homepage" className="nav-item">Manage Announcements</Link>
                </li>
                <li>
                    <Link to="../homepage" className="nav-item">Manage News</Link>
                </li>
                <li>
                    <Link to="../homepage" className="nav-item">Manage Applications</Link>
                </li>
            </ul>
        </div>
    )
}
export default Admdashnav