import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Booking from "./OtherPages/Bookings";
import AboutPage from "./OtherPages/about-page";
import Confirmation from "./OtherPages/confirmation";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/reservations" element={<Booking />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/reserved" element={<Confirmation />} />
        </Routes>
    )
}

export default Routing