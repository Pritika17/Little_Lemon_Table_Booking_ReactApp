import React from "react";
import "../../../styles/Homepage/special.css"

const SpecialCard = (props) => {
    return (
        <article className="menu-card">
            <img src={props.image} style={{width: "10rem"}} alt="" />
            <section className="menu-card-content">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <button className="special-button">Order for Delivery</button>
            </section>
        </article>
    )
}

export default SpecialCard