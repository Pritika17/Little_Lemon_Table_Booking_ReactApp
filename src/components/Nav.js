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
                            <p>Home</p>
                        </li>
                    </Link>
                    <Link to="/about">
                        <li>
                            <p>About</p>
                        </li>
                    </Link>
                    <li>
                        <a href={require("../assets/Little_lemon_menu.png")} target="_blank" rel="noreferrer">Menu</a>
                    </li>
                    <Link to="/reservations">
                        <li>
                            <p>Reservations</p>
                        </li>
                    </Link>
                    <Link to="/order-online">
                        <li>
                            <p>Order</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="loginbutton">
                <ul>
                    <Link to="/login">
                        <li>
                            <p>Login</p>
                        </li>
                    </Link>
                </ul>
                <div className="hamburger-menu">
                    <p onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <img src={require("../assets/menu-hamburger.png")} alt="" />
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Nav