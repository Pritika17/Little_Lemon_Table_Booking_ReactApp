import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={require("../assets/footer-logo.png")} alt="" />
            </div>
            <div className="footer-links" id="nav">
                <div className="navigation">
                    <h2>Navigation</h2>
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
            </div>
            <div className="footer-links" id="contact">
                <div className="contact">
                    <h2>Contact</h2>
                    <p>2395 Maldove Way</p>
                    <p>Chicago Illinois</p>
                    <p>(629)-243-6827</p>
                    <p>info@littlelemon.com</p>
                </div>
            </div>
            <div className="footer-links" id="connect">
                <div className="connect">
                    <h2>Connect</h2>
                    <ul>
                        <li>
                            <p>Facebook</p>
                        </li>
                        <li>
                            <p>Instagram</p>
                        </li>
                        <li>
                            <p>Likedin</p>
                        </li>
                        <li>
                            <p>Join Us!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer