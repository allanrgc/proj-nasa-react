import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home/home"
import Contact from "../pages/Contact/contact"
import Cart from "../pages/Cart/cart"
import Destiny from "../pages/Destiny/destiny";
// import { useEffect, useState } from "react";

export const Router = () => {
    // const [tripDetail, settripDetail] = useState([]);
    //   const showDetails = () => {
    //     };
    //     const closeDetail = () => {
    //     };

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/login" 
                    // component={TelaLogin}
                    element={<TelaLogin />}/>
                <Route 
                    path="/" 
                    // component={Home}
                    element={<Home />}/>
                <Route 
                  path="/register"
                //   component={Register}
                  element={<Register />} />
                <Route 
                  path="/destiny"
                  element={<Destiny />} />
                <Route 
                  path="/contact"
                  element={<Contact />} />
                <Route 
                  path="/cart"
                  element={<Cart />} 
                  />

                <Route path="*" element={<TelaLogin/>} />
            </Routes>
        </BrowserRouter>
    )
}