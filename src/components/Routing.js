import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Booking from "./OtherPages/Bookings";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/reservations" element={<Booking />} />
        </Routes>
    )
}

export default Routing