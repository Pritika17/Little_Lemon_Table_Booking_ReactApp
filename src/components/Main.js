import React from "react";
import About from "./Homepage/About";
import Specials from "./Homepage/Specials/specials";
import Testimonial from "./Homepage/Testimonials/testimonials";

const Main = () => {
    return (
        <main>
            <About />
            <Specials/>
            <Testimonial/>
        </main>
    )
}

export default Main