import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Homepage/special.css"

const SpecialCard = (props) => {
    return (
        <article className="menu-card">
            <img src={props.image} alt="" />
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <Link to="/order-online">
                    <button className="special-button">Order for Delivery</button>
                </Link>
            </section>
        </article>
    )
}

export default SpecialCard