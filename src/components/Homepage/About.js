import React from "react";
import "../../styles/Homepage/about.css"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h1>Chicago</h1>
                <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chaicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
                <Link to="/reservations">
                    <button className="reserve">
                        Reserve a table
                    </button>
                </Link>
            </section>
            <section className="image">
                <img src={require("../../assets/about.jpg")} alt="" />
            </section>
        </article>
    )
}

export default About