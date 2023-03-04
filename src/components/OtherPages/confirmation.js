import React from "react";
import { Link } from "react-router-dom";
import "../../styles/confirmation.css"

const Confirmation = () => {
    return (
        <article className="confirmation">
            <div>
                <img src={require("../../assets/confirm.png")} alt="" />
                <h1>Table Booked!</h1>
                <p>Your reservation was successfully submitted</p>
                <p>Enjoy your Dine with us!</p>
                <Link to="/">
                    <button>Go back to home page</button>
                </Link>
            </div>
        </article>
    )
}

export default Confirmation