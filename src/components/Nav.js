import React, { useState } from "react"
import "../styles/nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false)
    return (
        <nav className="main-nav">
            <div className="logo">
                <Link to="/">
                    <img src={require("../assets/Logo.png")} alt="" />
                </Link>
            </div>
            <div className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
                <ul>
                    <Link to="/">
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </Link>
                    <Link to="/about">
                        <li>
                            <a href="#">About</a>
                        </li>
                    </Link>
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