import React from "react"
import { Link } from "react-router-dom"
import Announcedash from "./Announcedash"
import Admdashnav from "./Admdashnav"

import "./dashboardstyles.css"


function Admdash () {
    return (
        <div>
            <div>
                <Admdashnav />
                <Announcedash />
            </div>
        </div>
      )
    }

export default Admdash