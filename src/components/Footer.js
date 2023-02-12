import React from "react";
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
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Reservations</a>
                        </li>
                        <li>
                            <a href="#">Order</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-links" id="contact">
                <div className="contact">
                    <h2>Contact</h2>
                    <p>2395 Maldove Way</p>
                    <p>Chicago Illinois</p>
                    <p>(629)-243-6827</p>
                    <a href="#">info@littlelemon.com</a>
                </div>
            </div>
            <div className="footer-links" id="connect">
                <div className="connect">
                    <h2>Connect</h2>
                    <ul>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Likedin</a>
                        </li>
                        <li>
                            <a href="#">Join Us!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer