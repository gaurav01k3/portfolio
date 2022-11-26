import React from 'react'
import './style/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar_wrapper">
            <div className="navbar_item"><span>I.</span> about</div>
            <div className="navbar_item"><span>II.</span> experience</div>
            <div className="navbar_item"><span>III.</span> projects</div>
            <div className="navbar_item"><span>IV.</span> skills</div>
            <div className="navbar_item"><span>V.</span> education</div>
        </div>
    )
}

export default Navbar