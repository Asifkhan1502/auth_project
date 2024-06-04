import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import ContactUs from "../screens/ContactUs";
import Navbar from "../screens/layouts/Navbar";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>

        </BrowserRouter>
    )
}
export default AppRoutes;