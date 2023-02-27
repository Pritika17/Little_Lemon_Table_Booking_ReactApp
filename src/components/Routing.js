import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Booking from "./OtherPages/Bookings";
import AboutPage from "./OtherPages/about-page";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/reservations" element={<Booking />} />

            <Route path="/about" element={<AboutPage />} />
        </Routes>
    )
}

export default Routing