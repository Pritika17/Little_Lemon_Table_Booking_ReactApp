import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Booking from "./OtherPages/Bookings";
import AboutPage from "./OtherPages/about-page";
import Confirmation from "./OtherPages/confirmation";
import Order from "./OtherPages/Order-online/order-online-page";
import Loginpage from "./OtherPages/login-page";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/reservations" element={<Booking />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/reservations/reserved" element={<Confirmation />} />

            <Route path="/order-online" element={<Order />} />

            <Route path="/login" element={<Loginpage/>}/>
        </Routes>
    )
}

export default Routing