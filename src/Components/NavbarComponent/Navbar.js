import React from "react";
import './Navbar.css'
import { BsGlobe,FaGlobe } from "react-icons/fa";

function Navbar(){
    return(
        <div className="container">
            <nav className="navbar">
                <FaGlobe className="glob-icon"/>
                <p> mytraveljournal</p>
            </nav>
        </div>
    )
}

export default Navbar