import React from 'react';
import Slider from 'react-slick';
import './slick-theme.css';
import './slick.css';
import Bruchetta from "../../../assets/bruchetta.png"
import greeksalad from "../../../assets/greek-salad.jpg"
import lemondesert from "../../../assets/lemon-desert.jpg"
import "../../../styles/Homepage/special.css"
import SpecialCard from './Specials-card';
import "../../../styles/Homepage/special.css"

const SpecialCarausel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 986,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <SpecialCard image={greeksalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce" />
            <SpecialCard image={Bruchetta} name="Bruschetta" price="$16.99" description="Bread, mango, green onions" />
            <SpecialCard image={lemondesert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Slider>
    )
}

export default SpecialCarausel