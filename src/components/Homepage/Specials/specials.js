import React from "react";
import SpecialCard from "./Specials-card";
import Bruchetta from "../../../assets/bruchetta.png"
import greeksalad from "../../../assets/greek-salad.jpg"
import lemondesert from "../../../assets/lemon-desert.jpg"
import "../../../styles/Homepage/special.css"


const Specials = () => {
    return (
        <section className="special-upper">
            <article className="special-head">
                <h1>This weeks specials</h1>
                <a className="online-menu" href={require("../../../assets/Little_lemon_menu.png")}>Online Menu</a>
            </article>
            <section className="cards-special">
                <SpecialCard image={greeksalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil." />
                <SpecialCard image={Bruchetta} name="Bruchetta" price="$12.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil." />
                <SpecialCard image={lemondesert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest." />
            </section>
        </section>
    )
}

export default Specials