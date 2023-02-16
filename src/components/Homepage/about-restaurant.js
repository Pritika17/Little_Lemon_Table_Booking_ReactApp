import React from "react";
import "../../styles/Homepage/restaurant.css"

const Restaurant = () => {
    return (
        <article className="restaurant">
            <section className="about-restaurant">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>
            <section className="double-img">
                <img className="food1" src={require("../../assets/food1.png")} alt="" />
                <img className="food2" src={require("../../assets/food2.png")} alt="" />
            </section>
        </article>
    )
}

export default Restaurant