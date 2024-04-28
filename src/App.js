// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import Template from "./components/Template"
import Nav from "./components/navbar/Navbar"
import Homepage from "./components/pages/homepage/Homepage"
import Contact from "./components/pages/contact/Contact"
import Announcement from "./components/pages/announcement/Announcement"
import About from "./components/pages/about/About"
import Foot from "./components/footer/Foot"
import Admission from "./components/pages/admission/Admission"
import Admin from "./components/pages/admission/Admin"
import Admdash from "./components/pages/admission/Admdash"

import './App.css';

function ScrollToTop () {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

function App() {
    return(
        <div className="App">
            <BrowserRouter>
            <ScrollToTop />
                <Nav />
                <Routes>
                    <Route path="/" element={<Template />}>
                        <Route index element={<Homepage />} />
                        <Route path="/homepage" element={<Homepage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/announcement" element={<Announcement />} />   
                        <Route path="/about" element={<About />} />
                        <Route path ="/admission" element={<Admission />} />
                        <Route path ="/admin" element={<Admin />} />
                        <Route path ="/admdash" element={<Admdash />} />
                    </Route>
                </Routes>
                <Foot />
            </BrowserRouter>
        </div>
    )
}

export default App