import React from "react"
import { Link } from "react-router-dom";

import "./navbar.css"
import logo from "./logo.png"

function Nav () {
    return (
        <nav className="nav-bar">
            <img 
                src={logo}
                alt="mindhaven logo"
                className="nav-logo"
            />
            <h2 className="nav-title">MINDHAVEN SCHOOL INC</h2>
            <div className="page-link"> 
                <ul>
                    <li>
                        <Link to="./homepage" className="page">Home</Link>
                    </li>
                    <li>
                        <Link to="./announcement" className="page">Announcement</Link>
                    </li>
                    <li>
                        <Link to="./about" className="page">About Us</Link>
                    </li>
                    <li>
                        <Link to="./admission" className="page">Admission</Link>
                    </li>
                    <li>
                        <Link to="./contact" className="page">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav