import React, { useState } from "react"
import "../styles/nav.css"

const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false)
    return (
        <nav className="main-nav">
            <div className="logo">
                <img src={require("../assets/Logo.png")} alt="" />
            </div>
            <div className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                    <li>
                        <a href="#">Order</a>
                    </li>
                </ul>
            </div>
            <div className="loginbutton">
                <ul>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <img src={require("../assets/menu-hamburger.png")} alt="" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav