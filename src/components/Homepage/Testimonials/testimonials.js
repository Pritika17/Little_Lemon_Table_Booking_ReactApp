import React from "react";
import TestimonialCard from "./tesmonial-card";
import "../../../styles/Homepage/testimonials.css"

const Testimonial = () => {
    return (
        <section className="testimonials">
            <article>
                <h1>Testimonials</h1>
            </article>
            <section className="testimonials-cards">
                <div className="T-first-card">
                    <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!" />
                </div>
                <div className="T-second-card">
                    <TestimonialCard name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here." />
                </div>
                <div className="T-third-card">
                    <TestimonialCard name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture." />
                </div>
                <div className="T-fourth-card">
                    <TestimonialCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to." />
                </div>
                <div className="T-fifth-card">
                    <TestimonialCard name="Jim Reynor" description="The food here really refreshed me after a late night shift at the local supply depot." />
                </div>
                <div className="T-sixth-card">
                    <TestimonialCard name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here." />
                </div>
                <div className="T-seventh-card">
                    <TestimonialCard name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place out at least once if they live in Chicago" />
                </div>
                <div className="T-eighth-card">
                    <TestimonialCard name="Jack Hu" description="This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!" />
                </div>
            </section>
        </section>
    )
}

export default Testimonial