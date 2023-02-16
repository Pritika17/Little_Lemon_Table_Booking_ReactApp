import React from "react";
import About from "./Homepage/About";
// import Restaurant from "./Homepage/about-restaurant";
import Specials from "./Homepage/Specials/specials";
// import Testimonial from "./Homepage/Testimonials/testimonials";

const Main = () => {
    return (
        <main>
            <About />
            <Specials/>
            {/* <Testimonial/>
            <Restaurant/> */}
        </main>
    )
}

export default Main