import React from "react";
import Star from "../../../assets/star.png"

const TestimonialCard = (props) => {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    )
}

export default TestimonialCard