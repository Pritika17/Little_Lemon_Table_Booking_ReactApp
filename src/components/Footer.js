import React from "react";

const Footer = () => {
    return (
        <footer>
            <img src={require("../assets/footer_logo.png")} alt="" />
            <menu>
                <div>
                    <h2>Navigation</h2>
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
                            <a href="#">Order Online</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>2395 Maldove Way,</li>
                        <li>Chicago Illinois</li>
                        <br />
                        <li>(629)-243-6827</li>
                        <br />
                        <a href="#">info@littlelemon.com</a>
                    </ul>
                </div>
                <div>
                    <h2>Connect</h2>
                    <ul>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </menu>
        </footer>
    )
}

export default Footer