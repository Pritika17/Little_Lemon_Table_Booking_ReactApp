import React from "react"
import "../../styles/about-page.css"

const AboutPage = () => {
    return (
        <article className="main-about">
            <section className="about-1st-sect">
                <h1>About Us</h1>
                <p>Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. <br /> <br /> The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. <br /> <br /> The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day. <br /> <br /> Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. <br /> <br /> To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. <br /> <br /> Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
            </section>
            <section className="about-2nd-sect">
                <img src={require("../../assets/chef-img.jpg")} alt="" />
                <p>Little Lemon owners- Mario and Andrian</p>
            </section>
        </article>
    )
}

export default AboutPage